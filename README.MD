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
El uso de web es es facil, consta de dos partes, la primera es el bloque donde se muestra la contraseña, hay dos botones de control (copiar, regenerar contraseña) y por último aparece un mensaje de feedback para mostarle al usuario la fuerza de la contraseña
![Foto del primer bloque de la web](/docs/screenShoot-part1.png)

Para modificar la contraseña tenemos el segundo bloque donde podemos modificar la longitud e añadir grupos de caracteres (mayusculas, minusculas, simbolo, numeros) como se muestra en la imagen
![Foto del segundo bloque de la web](/docs/screenShoot-part2.png)
marcas la opciones que condideres y la longitud que consideres necesario para la creación de la contraseña, y la web generará la contraseña por ti, y la configuración que seleccionarás se guarda automaticamente por lo tanto cuando vuelva a recargar la página se carga la configuración de la ultima vez se visito la página.

## 🧑‍💻 Autor
* Yassin C.E - [Perfil de github](https://github.com/yassince)

## Prueba 👀
Puedes probar la pagina web [aquí](https://pass-gen-delta-rose.vercel.app)