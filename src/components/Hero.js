import React, { Component } from 'react';
import heroImage from '../images/hero-image.jpg';
import Arrow from './Icons/Arrow';
import { HashLink } from 'react-router-hash-link';


class Hero extends Component {
  render(){
    return(
    <section className="hero" style={{backgroundImage: `url(${heroImage})`}} id="hero">
      <h1 className="hero-title uppercase margin-title center">bus app</h1>
      <p className="hero-subtitle center padding-subtitle">Madrid, en la palma de tu mano</p>
      <HashLink to="/#intro"><Arrow className="arrow-down"/></HashLink>
    </section>
    )
  }
}

export default Hero;
