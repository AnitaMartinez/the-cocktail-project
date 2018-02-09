import React, { Component } from 'react';


class Intro extends Component {
  render(){
    return(

    <div className= "intro">
    <img src="img/marker-icon.svg" className= "marker-icon-intro" alt="icono de marker"/>
    <h2 className= "home-title introduction-title center">Bienvenido a BusApp</h2>
    <p className= "home-text introduction-body center">Para comenzar, elige una zona para descubrir las paradas disponibles</p>
    <button className= "home-button main-button button-light-font" type="button" name="button">Glorieta de bilbao</button>
    <button className= "home-button main-button button-light-font" type="button" name="button">The cocktail</button>
    <button className= "home-button main-button button-light-font" type="button" name="button">El campo</button>
    </div>

    );
  }
}

export default Intro;
