export const BUTTON = document.querySelector('button');
export const PASS = document.querySelector("#pass")
export const APP = document.querySelector("#app")


export const PassGen = `
    <div class="app">
      <h1 class="title">PassGen</h1>
      <section>
        <div id="pass"></div>
        <button>Gen Pass</button>
        <button id="backConfig">Volver a configurar una contraseña</button>
      </section>
    </div>
`

export const FromSetting = `
    <h3> Características de la contraseña </h3>
    <form class="setings">
        <label for="length">Longitud</label>
        <input type="number" id="length" name="length" de></input>
        <section class="properties">

            <section class="property">
                <label for="uppercase">Mayusculas:</label>
                <input type="checkbox" id="uppercase"></input>
            </section>
            

            <section class="property">
                <label for="lowercase">Minusculas:</label>
                <input type="checkbox" id="lowercase"></input>
            </section>
            

            <section class="property">
                <label for="symbol">Simbolos:</label>
                <input type="checkbox" id="symbol"></input>
            </section>
            

            <section class="property">
                <label for="number">Números:</label>
                <input type="checkbox" id="number"></input>
            </section>
       </section>

        <input type="submit" value="Enviar"></input>
    </from>
`
