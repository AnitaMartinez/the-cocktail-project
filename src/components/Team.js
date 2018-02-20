import React, { Component } from 'react';
import profilePic from '../images/profile.jpg';



class Team extends Component {
  render() {
    return(
      <div className="teamWrapper">

      <div style={{backgroundImage: `url(${profilePic})`}} className="teamImage">
       <p className="imgDescription">Ana, programadora front end y amante del Big Data</p>
      </div>
      <div style={{backgroundImage: `url(${profilePic})`}} className="teamImage">
       <p className="imgDescription">Estela, programadora front end y muy minimalista</p>
      </div>
      <div style={{backgroundImage: `url(${profilePic})`}} className="teamImage">
       <p className="imgDescription">María, programadora front end y no desarrolla sin contenido</p>
      </div>
      <div style={{backgroundImage: `url(${profilePic})`}} className="teamImage">
        <p className="imgDescription">Rita, programadora front end y amante de perros salchichas</p>
      </div>

      </div>
    )
  }
}

export default Team
