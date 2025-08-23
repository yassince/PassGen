import { formEvent, loadForm } from './Form/FormSetings.js';
import './style.css'

//Load From Configuration for pass
loadForm(document.querySelector('#app'))

//submit of form
document.querySelector('form').addEventListener('submit', formEvent)

if(localStorage.getItem('userPreferences')){

}


