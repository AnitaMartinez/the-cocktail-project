import React, { Component } from 'react';
import profilePic from '../images/teampic.jpg';



class Team extends Component {
  render() {
    return(
      <div className="teamWrapper">
      <h3 className="m-top-none section-title-font section-title team-title">Nuestro Equipo</h3>
        <div style={{backgroundImage: `url(${profilePic})`}} className="teamImage">
          <div className="component1">
            <p>'Improvisando en Javascript'</p>
          </div>
          <div className="component2">
            <p>'El minimalismo es mi lema'</p>
          </div>
          <div className="component3">
            <p>'Si contenido, luego existo'</p>
          </div>
          <div className="component4">
            <p>'¿Big Data? Simplemente amante'</p>
          </div>
        </div>
      </div>

      // <div style={{backgroundImage: `url(${profilePic})`}} className="teamImage">
      //  <p className="imgDescription">Ana, programadora front end y amante del Big Data</p>
      // </div>
      // <div style={{backgroundImage: `url(${profilePic})`}} className="teamImage">
      //  <p className="imgDescription">Estela, programadora front end y muy minimalista</p>
      // </div>
      // <div style={{backgroundImage: `url(${profilePic})`}} className="teamImage">
      //  <p className="imgDescription">María, programadora front end y no desarrolla sin contenido</p>
      // </div>
      // <div style={{backgroundImage: `url(${profilePic})`}} className="teamImage">
      //   <p className="imgDescription">Rita, programadora front end y amante de perros salchichas</p>






    )
  }
}

export default Team
