import React, { Component } from 'react';
import profilePic from '../images/team.jpg';



class Team extends Component {
  render() {
    return(
      <div className="teamWrapper">
      <div style={{backgroundImage: `url(${profilePic})`}} className="teamImage">
      <div className="component1">'El minimalismo es mi lema'</div>
      <div className="component2">'El bid data es mi pasión'</div>
      <div className="component3">'El bid data es mi pasión'</div>


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
