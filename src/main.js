import './style.css'
import { resizeDisplay } from './utils/utils'

/* Event for resize windows */
window.onload = resizeDisplay
window.addEventListener("resize", resizeDisplay)