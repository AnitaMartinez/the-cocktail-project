import React, { Component } from 'react';
import Star from './Icons/Star';
import IconMarker from './Icons/IconMarker';


class Footer extends Component {
  render(){
    return(
    <footer className="footer footer-font">
      <div className="icons-footer">
        <Star className="footer-star"/>
        <IconMarker className="icon-marker-footer"/>
        <Star className="footer-star-desktop"/>
      </div>
      <p>Hecho por 'Las Apis' de Adalab</p>
    </footer>
    )
  }
}

export default Footer;
