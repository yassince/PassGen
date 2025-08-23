
/**
 * Function that create a random Pass
 * @returns random Pass
 */
function createPass() {
  let result = ""
  for (let i = 0; i < userPreferences.longitud; i++) {
    let num = getNumBetween(33, 126)
    result = result.concat(String.fromCharCode(num))
  }

  return result
}


//2. Añadir el evento del click al boton
document.getElementsByTagName('button')[0].addEventListener('click', (e) => {
  let genPass = createPass();
  PASS.innerHTML = genPass;
})




//3. Method that return a num between 2 numbers
const getNumBetween = (num1, num2) => {
  let min = Math.ceil(num1)
  let max = Math.floor(num2)

  return Math.floor(Math.random() * (max - min + 1) + min);
}
