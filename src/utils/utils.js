import { updatePass } from "./password";

/* body of the program */ /* Falta terminar de organizar el body completo */
const body = `
<div class="flex items-center flex-col justify-center gap-12 p-8 rounded-[60px] bg-gray-900/20 backdrop-blur-3xl shadow-xl/40 shadow-gray-700 font-sans text-white dark:text-blue-300 transition-all duration-500"> 
    ${/* Toggle theme button */""}
    <section class="theme self-end flex flex-row">
      <label class="italic text-xl self-center">Dark Theme</label>
      <div class="body_toggle_button ml-4 min-w-16 bg-blue-950 rounded-2xl">
      </div>
    </section>

    ${/* Title and subtitle */""}
    <h1 class="text-5xl font-bold text-shadow-lg/40 text-shadow-black">Password Generator</h1>
    <span class="italic font-bold text-gray-300 dark:text-shadow-lg text-shadow-gray-500 text-xl transition-all">Safe and fast, built to last.</span>

    ${/* Password display section */""}
    <section class="bg-orange-300/40 dark:bg-gray-500/40 rounded-2xl transition-all duration-500">
      <div class="flex justify-around p-6 gap-4">
        <span id="pass" class="min-w-xs text-center text-3xl font-bold cursor-pointer">Here will be the password</span>
        <section class="flex gap-4">
          <button id="copy" class="p-2 rounded-2xl bg-[#C78B45] dark:bg-blue-300/40 text-white cursor-pointer hover:scale-90 transition-all">Copy</button>
          <button id="regen" class="p-2 rounded-2xl bg-[#C78B45] dark:bg-blue-300/40 text-white cursor-pointer hover:scale-90 transition-all">
            <svg fill="#FFFFFF" height="25px" width="25px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
	            viewBox="0 0 489.711 489.711" xml:space="preserve">
              <g>
	              <g>
		              <path d="M112.156,97.111c72.3-65.4,180.5-66.4,253.8-6.7l-58.1,2.2c-7.5,0.3-13.3,6.5-13,14c0.3,7.3,6.3,13,13.5,13
			              c0.2,0,0.3,0,0.5,0l89.2-3.3c7.3-0.3,13-6.2,13-13.5v-1c0-0.2,0-0.3,0-0.5v-0.1l0,0l-3.3-88.2c-0.3-7.5-6.6-13.3-14-13
			              c-7.5,0.3-13.3,6.5-13,14l2.1,55.3c-36.3-29.7-81-46.9-128.8-49.3c-59.2-3-116.1,17.3-160,57.1c-60.4,54.7-86,137.9-66.8,217.1
			              c1.5,6.2,7,10.3,13.1,10.3c1.1,0,2.1-0.1,3.2-0.4c7.2-1.8,11.7-9.1,9.9-16.3C36.656,218.211,59.056,145.111,112.156,97.111z"/>
		              <path d="M462.456,195.511c-1.8-7.2-9.1-11.7-16.3-9.9c-7.2,1.8-11.7,9.1-9.9,16.3c16.9,69.6-5.6,142.7-58.7,190.7
			              c-37.3,33.7-84.1,50.3-130.7,50.3c-44.5,0-88.9-15.1-124.7-44.9l58.8-5.3c7.4-0.7,12.9-7.2,12.2-14.7s-7.2-12.9-14.7-12.2l-88.9,8
			              c-7.4,0.7-12.9,7.2-12.2,14.7l8,88.9c0.6,7,6.5,12.3,13.4,12.3c0.4,0,0.8,0,1.2-0.1c7.4-0.7,12.9-7.2,12.2-14.7l-4.8-54.1
			              c36.3,29.4,80.8,46.5,128.3,48.9c3.8,0.2,7.6,0.3,11.3,0.3c55.1,0,107.5-20.2,148.7-57.4
			              C456.056,357.911,481.656,274.811,462.456,195.511z"/>
	              </g>
              </g>
            </svg>  
          </button>
        </section>
      </div>
      <div id="feedback" class="text-white min-w-auto rounded-b-2xl text-center p-2">There will be the feedback message</div>
    </section>

    ${/* Form section */""}
    <section>
      <form class="grid grid-cols-2 xl:flex xl:flex-col gap-4 justify-start w-auto " >
        <div class="grid col-span-2 w-full xl:w-auto xl:grid-cols-2 justify-center p-6 gap-4 text-xl">
          <label for="length">Length</label>
          <input type="number" value=12 min=8 max=21 id="length" readonly class="text-right font-bold">
          <input class="col-span-2" type="range" min="8" max="21" value="12" class="appearance-none w-100 h-1" id="range" name="range"/>
        </div>

        <div class="p-6 flex md:gap-2 justify-between bg-orange-300/20 dark:bg-gray-400/40 transition-colors duration-500 rounded-2xl">
          <label for="length">Include UpperCase Letter</label>
          <input type="checkbox" name="upperCase" checked />
        </div>
        
        <div class="p-6 flex justify-between bg-orange-300/20 dark:bg-gray-400/40 transition-colors duration-500 rounded-2xl">
          <label for="length">Include LowerCase Letter</label>
          <input type="checkbox" name="lowerCase" checked />
        </div>

        <div class="p-6 flex justify-between bg-orange-300/20 dark:bg-gray-400/40 transition-colors duration-500 rounded-2xl">
          <label for="length">Include Symbol</label>
          <input type="checkbox" name="symbol" checked />
        </div>

        <div class="p-6 flex justify-between bg-orange-300/20 dark:bg-gray-400/40 transition-colors duration-500 rounded-2xl">
          <label for="length">Include Numbers</label>
          <input type="checkbox" name="number" checked />
        </div>

      </form>
    </section>

    ${/* Link section to github */""}
    <section class="link_info p-2 flex flex-row dark:opacity-100">
      <a class="cursor-pointer rounded-full dark:bg-gray-600/40 p-2 bg-[#C78B45] transition-colors" href="https://github.com/yassince/PassGen.git" target="_blank" rel="noopener noreferrer" title="GitHub Repository">
        <svg fill="#000000" width="32" height="32" viewBox="0 -0.5 25 25"
        xmlns="http://www.w3.org/2000/svg">
          <path d="m12.301 0h.093c2.242 0 4.34.613 6.137 1.68l-.055-.031c1.871 1.094 3.386 2.609 4.449 4.422l.031.058c1.04 1.769 1.654 3.896 1.654 6.166 0 5.406-3.483 10-8.327 11.658l-.087.026c-.063.02-.135.031-.209.031-.162 0-.312-.054-.433-.144l.002.001c-.128-.115-.208-.281-.208-.466 0-.005 0-.01 0-.014v.001q0-.048.008-1.226t.008-2.154c.007-.075.011-.161.011-.249 0-.792-.323-1.508-.844-2.025.618-.061 1.176-.163 1.718-.305l-.076.017c.573-.16 1.073-.373 1.537-.642l-.031.017c.508-.28.938-.636 1.292-1.058l.006-.007c.372-.476.663-1.036.84-1.645l.009-.035c.209-.683.329-1.468.329-2.281 0-.045 0-.091-.001-.136v.007c0-.022.001-.047.001-.072 0-1.248-.482-2.383-1.269-3.23l.003.003c.168-.44.265-.948.265-1.479 0-.649-.145-1.263-.404-1.814l.011.026c-.115-.022-.246-.035-.381-.035-.334 0-.649.078-.929.216l.012-.005c-.568.21-1.054.448-1.512.726l.038-.022-.609.384c-.922-.264-1.981-.416-3.075-.416s-2.153.152-3.157.436l.081-.02q-.256-.176-.681-.433c-.373-.214-.814-.421-1.272-.595l-.066-.022c-.293-.154-.64-.244-1.009-.244-.124 0-.246.01-.364.03l.013-.002c-.248.524-.393 1.139-.393 1.788 0 .531.097 1.04.275 1.509l-.01-.029c-.785.844-1.266 1.979-1.266 3.227 0 .025 0 .051.001.076v-.004c-.001.039-.001.084-.001.13 0 .809.12 1.591.344 2.327l-.015-.057c.189.643.476 1.202.85 1.693l-.009-.013c.354.435.782.793 1.267 1.062l.022.011c.432.252.933.465 1.46.614l.046.011c.466.125 1.024.227 1.595.284l.046.004c-.431.428-.718 1-.784 1.638l-.001.012c-.207.101-.448.183-.699.236l-.021.004c-.256.051-.549.08-.85.08-.022 0-.044 0-.066 0h.003c-.394-.008-.756-.136-1.055-.348l.006.004c-.371-.259-.671-.595-.881-.986l-.007-.015c-.198-.336-.459-.614-.768-.827l-.009-.006c-.225-.169-.49-.301-.776-.38l-.016-.004-.32-.048c-.023-.002-.05-.003-.077-.003-.14 0-.273.028-.394.077l.007-.003q-.128.072-.08.184c.039.086.087.16.145.225l-.001-.001c.061.072.13.135.205.19l.003.002.112.08c.283.148.516.354.693.603l.004.006c.191.237.359.505.494.792l.01.024.16.368c.135.402.38.738.7.981l.005.004c.3.234.662.402 1.057.478l.016.002c.33.064.714.104 1.106.112h.007c.045.002.097.002.15.002.261 0 .517-.021.767-.062l-.027.004.368-.064q0 .609.008 1.418t.008.873v.014c0 .185-.08.351-.208.466h-.001c-.119.089-.268.143-.431.143-.075 0-.147-.011-.214-.032l.005.001c-4.929-1.689-8.409-6.283-8.409-11.69 0-2.268.612-4.393 1.681-6.219l-.032.058c1.094-1.871 2.609-3.386 4.422-4.449l.058-.031c1.739-1.034 3.835-1.645 6.073-1.645h.098-.005zm-7.64 17.666q.048-.112-.112-.192-.16-.048-.208.032-.048.112.112.192.144.096.208-.032zm.497.545q.112-.08-.032-.256-.16-.144-.256-.048-.112.08.032.256.159.157.256.047zm.48.72q.144-.112 0-.304-.128-.208-.272-.096-.144.08 0 .288t.272.112zm.672.673q.128-.128-.064-.304-.192-.192-.32-.048-.144.128.064.304.192.192.32.044zm.913.4q.048-.176-.208-.256-.24-.064-.304.112t.208.24q.24.097.304-.096zm1.009.08q0-.208-.272-.176-.256 0-.256.176 0 .208.272.176.256.001.256-.175zm.929-.16q-.032-.176-.288-.144-.256.048-.224.24t.288.128.225-.224z" />
        </svg>
      </a>
    </section>
    </div>
`

/**
 * Resize display function that will load the body if the display size is more than 448px
 */
export const resizeDisplay = () => {
  let widthSize = window.outerWidth;/* Current width size */

  if (widthSize > 448) {
    document.querySelector("#app").innerHTML = body

    /* Create an object that contains userPreferences of pass or user the old one */
    if (!localStorage.getItem('userPreferences')) createUserPreferences()
    else{
      updateFromLocalStorage(localStorage.getItem('userPreferences'))
    }
    
    //Event for from
    document.getElementsByTagName('form')[0].addEventListener('change', fromEvent)
    
    //range
    document.getElementById("range").addEventListener('input', styleRange)
    document.getElementById("range").dispatchEvent(new Event('input'));

    //copy and regen buttons
    document.getElementById('regen').addEventListener('click', triggerEventFrom)
    document.getElementById('copy').addEventListener('click', copyClipboard)
    document.getElementById('pass').addEventListener('click', copyClipboard)

    //theme toggle button
    document.getElementsByClassName("body_toggle_button")[0].addEventListener("click", (e) => {
      document.body.classList.toggle("dark")
      e.target.classList.toggle("activate")
    })
    triggerEventFrom()
  } else {
    /* Display size less than md */
    document.querySelector("#app").innerHTML = "this page is not for you, sorry :("
  }
}

/**
 * Update the form from localStorage with userPreferences
 * @param {object} userPreferences 
 */
export const updateFromLocalStorage = (userPreferences) => {
  let form = document.getElementsByTagName('form')[0];
  userPreferences = JSON.parse(userPreferences)
  for (const key in userPreferences) {
    if (key === "length") {
      setLengthValue(userPreferences[key])
      styleRange({ target: document.getElementById("range") })
    } else {
      form.elements[key].checked = userPreferences[key]
    } 
  }
}

/**
 * Event to handel the toogle theme
 */
export const toggleTheme = () => {
  document.body.classList.toggle("dark")
  console.log(document.body.classList);
}

/**
 * Event for form that update userPreferences object and set new pass, it will be trigger when any input of form change
 * @param {*} e 
 */
export const fromEvent = (e) => {
  const inputChange = e.target.name;
  let userPreferences = JSON.parse(localStorage.getItem('userPreferences'))

  /* Update userPreferences object */
  if (inputChange === "range") {
    userPreferences.length = Number(e.target.value)
  } else {
    userPreferences[inputChange] = e.target.checked
  }

  /* Check if at least two options are selected */
  if (checkUserPreferences(userPreferences) < 2) {
    if (inputChange !== "range") {
      e.target.checked = true
      userPreferences[inputChange] = true
      alert("You must select at least two options");
      console.log(userPreferences);
      
    }
  }

  /* After checking userPreferences, we save it to localStorage */
  localStorage.setItem('userPreferences', JSON.stringify(userPreferences))
  const password = updatePass(userPreferences);
  setPassToWeb(password)
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
function setLengthValue(value) {
  document.getElementById("length").value = value
  document.getElementById("range").value = value
}

/**
 * Create user preferences object
 */
function createUserPreferences() {
  const userPreferences = {
    length: 12,
    upperCase: true,
    lowerCase: true,
    symbol: true,
    number: true
  }

  localStorage.setItem('userPreferences', JSON.stringify(userPreferences))
}

/**
 * set password into pass element 
 * @param {string} pass 
 */
const setPassToWeb = (pass) => {
  document.getElementById("pass").innerHTML = pass

}

/**
 * That function trigger the event of form to regen a new pass
 */
function triggerEventFrom() {
  const event = new Event('change', { bubbles: true })
  let form = document.getElementsByTagName("form")[0];
  form.dispatchEvent(event)
}

/**
 * Event for copy clipboard
 * @param {ClipboardEvent} e 
 */
function copyClipboard(e) {
  navigator.clipboard.writeText(document.getElementById('pass').innerText)
  alert('Contraseña copiada ;)')
}

/* Check if how many options are selected */
function checkUserPreferences(userPreferences) {
  let checks = 0;
  for (const key in userPreferences) {
    if (key !== "length" && userPreferences[key] === true) {
      checks++
    }
  }
  return checks;
}
