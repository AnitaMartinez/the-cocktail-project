import React, { Component } from 'react';
import IconMarker from './Icons/IconMarker';
import Hero from './Hero';
import Menu from './Menu';
import StickyMenu from './StickyMenu';

class About extends Component {
  render(){
    return(
      <div>
      <Menu/>
      <Hero/>
      <StickyMenu/>
      <div className= "about-intro">

      <h1 className= "about-title about-title-font center">Sobre este proyecto</h1>
      <p className="about-text introduction-body center">BusApp es un proyecto académico realizado por encargo para la agencia The Cocktail cuya finalidad era realizar una landing integrada con la API de Autobuses de la EMT, en la que puedes
      consultar las paradas de una zona, ver qué líneas coinciden con dicha parada y el tiempo de
      espera de esos autobuses. </p>



      <h2 className= "about-title about-title-font center">Objetivos académicos</h2>
      <div className= "about-icons-group">
      <div className= "about-icon-text">
      <IconMarker className="marker-icon-intro" />
      <h2 className= "about-subtitle about-subtitle-font center">Web responsive</h2>
      <p className= "about-text introduction-body center">Aprender a maquetar de forma responsiva un diseño con diferentes vistas.</p>
      </div>
      <div className= "about-icon-text">
      <IconMarker className="marker-icon-intro" />
      <h2 className= "about-subtitle about-subtitle-font center">Conexión con API de la EMT</h2>
      <p className= "about-text introduction-body center">Conectarse con una API y obtener información de esos datos para visualizarlo.</p>
      </div>
      <div className= "about-icon-text">
      <IconMarker className="marker-icon-intro" />
      <h2 className= "about-subtitle about-subtitle-font center">Uso de la API de Google Maps</h2>
      <p className= "about-text introduction-body center">Integrar un API Externa como Google Maps para poder pintar esos datos.</p>
      </div>
      </div>
      </div>
      </div>
    )
  }
}

export default About
