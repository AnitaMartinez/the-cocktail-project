# BusApp
## Página web desarrollada para The Cocktail

Landing integrada con la API de Autobuses de la EMT en la que el usuario puede consultar las paradas de una zona.

Objetivos:
 * Maquetar de forma responsiva un diseño con diferentes vistas.
 * Conectarse con una API y obtener información de esos datos para visualizarlo.
 * Integrar una API Externa como Google Maps para poder pintar esos datos.

Caso de uso:
Un usuario es capaz de entrar a la web y consultar las paradas de autobús cercanas (radio 500m) a las zonas propuestas en un mapa de Google Maps, al clickar en una de las paradas se podrá consultar el detalle de los autobuses que están por llegar a la parada, así como el tiempo restante para su llegada.

### Cómo comenzar

#### Requisitos

Para trabajar con React, necesitamos Node.js instalado. Para comprobar si tenemos Node.js instalado, escribimos esta orden en la terminal:

```
node -v
```
#### Installing

Para trabajar en el proyecto, necesitamos instalar estas dependencias:
* Tareas de Gulp
* Google Map React
* PropTypes

Para ello, ejecutamos en la terminal:

```
npm install
```
### Deployment en GitHub

1. Modificar package.json para que las rutas sean relativas a nuestros archivos: hay que añadir ”homepage”: “./“,.
2. Ejecutar ``` npm run build ``` para que nos cree la versión para producción en la carpeta build/.
3. GitHub Pages funciona en la carpeta raíz o en la docs/ de la rama master, así que querremos cambiar la carpeta build/ por la carpeta docs/, para ello, ejecutaremos ``` mv build docs ```.
4. Add, commit y push.

### Cómo contribuir
Puedes contribuir con un pull request con tu mejora para que la revisemos. Para realizar un Pull Request, primero actualiza el archivo README.md con los cambios realizados.
