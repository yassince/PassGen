/**
 * Event to handel the toogle theme
 */
export const toggleTheme = () => {
    document.body.classList.toggle("dark")
    console.log(document.body.classList);
}

/**
 * Event for form
 * @param {*} e 
 */
export const fromEvent = (e) => {
    console.log("it's working");
    
    console.log(e.target.checked);
    //TODO: este evento solo devuelve el objeto que a cambiado dentro del fromualrio, por lo tango hay q filtrar dependiendo de los elementos que entren que solo pueden ser dos(range, input{type: checkbox}).
    
}

/**
 * Event to set value to lenght input and add style to range input
 * @param {*} e 
 */
export const styleRange = (e) => {
    //set value on length input
    setLengthValue(e.target.value)
    
    //percentage of range value
    const value = (e.target.value - e.target.min) / (e.target.max - e.target.min) * 100
    e.target.style.setProperty("--value", `${value}%`)
}

/**
 * set value on lenght input
 * @param {number} value 
 */
function setLengthValue(value){
    document.getElementById("length").value = value
}


//TODO: Encontrar la manera de comprobar una contraseña mediante algún tipo de algoritmo, y si es posible consultar alguna apí, por si la contraseña ya esta filtrada
//TODO: funcion con encapsulamiento para la muestra el mensajes según la fuerza de la misma
//TODO: encontrar la logica para generar contraseñas recordables

