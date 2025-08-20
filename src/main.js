import './style.css'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div class="app">
    <h1 class="title">PassGen</h1>
    <section>
      <div id="pass"></div>
      <button>Gen Pass<Button>
    </section>
  </div>
`

setupCounter(document.querySelector('#counter'))
