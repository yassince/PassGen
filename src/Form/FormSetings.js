import "./styles.css"
import { FromSetting } from "../DomComponent";
import { loadPass } from "../GenPass/GenPass";

//Event for form for get user Preferences
export const formEvent = (e) => {
    e.preventDefault()
    
    //Property of pass configuration
    let length = document.getElementById('length').value
    
    //user preferences
    let userPreferences = {
        charUpperCase: document.getElementById('uppercase').checked ?? false,
        charLowerCase: document.getElementById("lowercase").checked ?? false,
        charNumber: document.getElementById("number").checked ?? false,
        charSymbol: document.getElementById("symbol").checked ?? false,
        length: length == '' ? 8 : parseInt(length)  //Defaul length 8 for the pass 
    }

    localStorage.setItem('userPreferences', JSON.stringify(userPreferences))
    console.log(userPreferences);
    
    loadPass(document.getElementById('app'))
}

//Load form configuration
export const loadForm = (app) => {
    app.innerHTML = FromSetting;
}