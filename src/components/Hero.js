import React, { Component } from 'react';
import heroImage from '../images/hero-image.jpg';
import Arrow from './Icons/Arrow';


class Hero extends Component {
  render(){
    return(
    <section className="hero" style={{backgroundImage: `url(${heroImage})`}} id="hero">
      <h1 className="hero-title uppercase margin-title center">bus app</h1>
      <p className="hero-subtitle center padding-subtitle">El mundo, en la palma de tu mano</p>
      <Arrow className="arrow-down"/>
    </section>
    )
  }
}

export default Hero;
