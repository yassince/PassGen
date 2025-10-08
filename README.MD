# PassGen

**PassGen** es una página la cuál genera contraseñas **aleatorias y criptograficamente** seguras, las contraseñas son presonalizables perminiento añadir o eliminar grupos de caracteres (mayusculas, minusculas, números y simbolos).

## Requisitos
- Node.js
- Git

## 🚀 Instalación y Ejecución Local

Para poder utilizar el proyecto, previamente tienes que tener instalado Node.js.
Para instalar el proyecto y poder utilizarlo localmente, lo primero que tienes que hacer es clonar el repositorio en tu ordenador con el comando:
`git clone https://github.com/yassince/PassGen`
y una vez situado en la carpeta raiz del proyecto, ejecuta este comando:
`npm install`
Y una vez instalado las dependencias necesarias, solo faltaria levantar el sevridor localmente con el siguiente comando:
`npm run dev`

## 🌟 Cómo usar

### 1º bloque
El uso de la web es fácil, consta de dos partes: la primera es el bloque donde se muestra la contraseña.  
Hay dos botones de control (copiar, regenerar contraseña) y por último aparece un mensaje de feedback para mostrarle al usuario la fuerza de la contraseña.

![Foto del primer bloque de la web](/docs/screenShoot-part1.png)
---

### 2º bloque
Para modificar la contraseña tenemos el segundo bloque donde podemos modificar la longitud e añadir grupos de caracteres (mayúsculas, minúsculas, símbolos, números), como se muestra en la imagen.

![Foto del segundo bloque de la web](/docs/screenShoot-part2.png)
---

Marca las opciones que consideres y la longitud que veas necesaria para la creación de la contraseña.  
La web generará la contraseña por ti, y la configuración que selecciones se guarda automáticamente, por lo tanto, cuando vuelvas a recargar la página, se cargará la configuración de la última vez que se visitó.

## 🧑‍💻 Autor
* Yassin C.E - [Perfil de github](https://github.com/yassince)

## Prueba 👀
Puedes probar la pagina web [aquí](https://pass-gen-delta-rose.vercel.app)