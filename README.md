# BusApp
## Aplicación web desarrollada para The Cocktail

Landing integrada con la API de Autobuses de la EMT en la que el usuario puede consultar las paradas de una zona. Nos conectamos con la API de la EMT e integramos la API Externa de Google Maps para poder pintar esos datos.
La aplicación está adaptada a todos los dispositivos y es necesario tener conexión a internet para que se pueda acceder a las apis externas.

Caso de uso:
Un usuario es capaz de entrar a la web y consultar las paradas de autobús cercanas (radio 500m) a las zonas propuestas en un mapa de Google Maps, al clickar en una de las paradas se podrá consultar el detalle de los autobuses que están por llegar a la parada, así como el tiempo restante para su llegada.

### Ayuda al desarrollo

#### Requisitos

Proyecto generado a partir de  ["create react app"](https://github.com/facebook/create-react-app).

Es necesario tener instalado node >= 6 para desarrollar la aplicación. Ver [Nodejs](https://nodejs.org/es/)

#### Comenzar

Ejecutamos en la terminal:

```
npm install
```
```
npm start
```
### Deployment en GitHub

1. Modificar package.json para que las rutas sean relativas a nuestros archivos: hay que añadir ”homepage”: “./“,.
2. Ejecutar ``` npm run build ``` para que nos cree la versión para producción en la carpeta build/.
3. GitHub Pages funciona en la carpeta raíz o en la docs/ de la rama master, así que querremos cambiar la carpeta build/ por la carpeta docs/, para ello, ejecutaremos ``` mv build docs ```.
4. Add, commit y push.

### Cómo contribuir
Puedes contribuir con un pull request con tu mejora para que la revisemos. Para realizar un Pull Request, primero actualiza el archivo README.md con los cambios realizados.
