import { PassGen } from "../DomComponent"
import { loadForm } from "../Form/FormSetings"


//Load the aplication
export const loadPass = (app) => {
  app.innerHTML = PassGen

  //Añadimos los eventos a los botones
  let buttonGen = document.getElementById('genPass')
  buttonGen.addEventListener('click', GenPassEvent)

  let buttonFrom = document.getElementById('backConfig')
  buttonFrom.addEventListener('click', getBackFrom)
}

/**
 * Function that create a random Pass
 * @returns random Pass
 */
function createPass(userPreferences) {
  //Creamos el array para añadir los char que nos hagan falta
  let arrayChars

  //Simbolos
  if (userPreferences.charSymbol) {
    arrayChars = Array.from({ length: 64 - 33 + 1 }, (_, i) => String.fromCharCode(33 + i))
    arrayChars.splice(15, 10)//Eliminamos los números del array de números
  }

  //Números
  if (userPreferences.charNumber) {
    arrayChars = arrayChars.concat(Array.from({ length: 57 - 48 + 1 }, (_, i) => String.fromCharCode(48 + i)))
  }

  //Mayusculas
  if (userPreferences.charUpperCase) {
    arrayChars = arrayChars.concat(Array.from({ length: 90 - 65 + 1 }, (_, i) => String.fromCharCode(65 + i)))
  }

  //Minusculas
  if (userPreferences.charLowerCase) {
    arrayChars = arrayChars.concat(Array.from({ length: 122 - 97 + 1 }, (_, i) => String.fromCharCode(97 + i)))
  }

  let result = ""
  for (let i = 0; i < userPreferences.length; i++) {
    let num = getRandomInt(arrayChars.length)
    result += arrayChars[num]
  }

  return result
}

//Event for gen button.
const GenPassEvent = (e) => {
  let userPreferences = JSON.parse(localStorage.getItem('userPreferences'))
  document.querySelector("#pass").innerHTML = createPass(userPreferences);
}

//Event for get back to form Configuration
const getBackFrom = (e) => {
  localStorage.removeItem('userPreferences')
  loadForm(document.getElementById('app'))
}



//3. Method that return a num between 2 numbers //hay que mirarlo bien
const getNumBetween = (num1, num2) => {
  let min = Math.ceil(num1)
  let max = Math.floor(num2)

  return Math.floor(Math.random() * (max - min + 1) + min);
}


const getRandomInt = (max) => {
  const array = new Uint32Array(1) //genera un número entero de 32 bits (2 millornes de números)
  window.crypto.getRandomValues(array)
  return array[0] % max;
}