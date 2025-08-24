export const BUTTON = document.querySelector('button');
export const PASS = document.querySelector("#pass")
export const APP = document.querySelector("#app")


export const PassGen = `
    <section>
        <div id="pass"></div>
        <section class="controls">
            <button id="genPass">Gen Pass</button>
            <button id="backConfig">Volver a configurar una contraseña</button>
        </section>
    </section>
`

export const FromSetting = `
    <h3> Características de la contraseña </h3>
    <form class="setings">
        <label for="length">Longitud</label>
        <input type="number" id="length" name="length" min="1" max="12"></input>
        <section class="properties">

            <section class="property">
                <label for="uppercase">Mayusculas:</label>
                <input type="checkbox" id="uppercase" checked></input>
            </section>
            

            <section class="property">
                <label for="lowercase">Minusculas:</label>
                <input type="checkbox" id="lowercase" checked></input>
            </section>
            

            <section class="property">
                <label for="symbol">Simbolos:</label>
                <input type="checkbox" id="symbol" checked></input>
            </section>
            

            <section class="property">
                <label for="number">Números:</label>
                <input type="checkbox" id="number" checked></input>
            </section>
       </section>

        <input type="submit" value="Enviar"></input>
    </from>
`
