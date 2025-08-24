import { formEvent, loadForm } from './Form/FormSetings.js';
import { loadPass } from './GenPass/GenPass.js';
import './style.css'

const app = document.querySelector('#app');
 
if(localStorage.getItem('userPreferences')){
    // Si ya existen preferencias, muestra la UI de la contraseña directamente.
    loadPass(app);
} else {
    // De lo contrario, muestra el formulario de configuración y añade el listener.
    loadForm(app);
    const form = document.querySelector('#app form');
    form.addEventListener('submit', formEvent);
}
