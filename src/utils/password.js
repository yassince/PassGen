import Char from './Char.js'

/**
 * Get random value
 * @param {number} num for number be into a range
 * @returns a aleatory number
 */
function getRandomValue(num) {
    const array = new Uint8Array(1)
    let aleatoryNumber = crypto.getRandomValues(array)
    /* To get a value into our range */
    return aleatoryNumber % num;
}

/**
 * 
 * @param {object} userPreferences that contains userPreferences -> lenth, lowerCase, upperCase, number, symbol
 * @returns The password crafted
 */
export function updatePass(userPreferences) {
    let charValues = [];
    let keys = Object.keys(userPreferences);
    let values = Object.values(userPreferences);

    /* Here we get the character classes based on user preferences and save it on charValues */
    for (let key of keys) {
        let charClass = new Char();
        /* We skip the length property */
        if (!(key === "length")) {
            if (values[keys.indexOf(key)]) {
                /* push de element that get by method char class */
                charValues.push(...charClass[key])
            }
        }
    }

    /* Get the length of the password */
    let length = values[0]

    let pass = []
    /* Generate the password */
    for (let i = 0; i < length; i++) {
        let indice = getRandomValue(charValues.length)
        pass.push(charValues[indice])
    }

    /* Make a string with the array password */
    let password = pass.join('');

    /* Inner the pass into DOM */
    let passwordStrength = getPasswordStrength(length, charValues.length);
    /* Get password feedback */
    setPasswordStrength(passwordStrength);
    return password;
}

/**
 * Calculate password strength 
 * @param {number} length 
 * @param {number} charsLength 
 * @returns 
 */
function getPasswordStrength(length, charsLength) {
    const passStrength = length * Math.log2(charsLength);
    return Math.round(passStrength);
}

/**
 * 
 * @param {number} strength entropy of the password
 * This function set the feedback message according to the strength of the password
 */
function setPasswordStrength(strength) {
    let feedbackSpan = document.getElementById('feedback');

    // Clean the classes from before
    feedbackSpan.classList.remove("weakPass", "mediumPass", "strongPass");
    //Get the feedback according to the strength
    const feedback = getPasswordFeedback(strength);

    //Set the message and the class
    feedbackSpan.innerText = feedback.message;
    feedbackSpan.classList.add(feedback.class);
}

/**
 * Get feedback on password strength
 * @param {number} strength 
 * @returns object with message and class
 */
function getPasswordFeedback(strength) {
    if (strength >= 28 && strength <= 35) {
        return { message: "Not bad, but you can do better", class: "weakPass" }
    } else if (strength >= 36 && strength <= 59) {
        return { message: "Great password, but can be better", class: "mediumPass" }
    } else if (strength >= 60 && strength <= 127) {
        return { message: "That's looks solid and hard to crack", class: "strongPass" }
    } else if (strength >= 128) {
        return { message: "That's a top-tier password. No one will crack it", class: "strongPass" }
    }
}

//TODO: funcion con encapsulamiento para la muestra el mensajes según la fuerza de la misma
//TODO: encontrar la logica para generar contraseñas recordables
//TODO: Añadir consulta a api de contraseñas filtradas