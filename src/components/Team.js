import React, { Component } from 'react';
import profilePic from '../images/teampic2.jpg';



class Team extends Component {
  render() {
    return(
      <div className="teamWrapper">
        <h1 className="section-title-font section-title team-title">Nuestro Equipo</h1>
       <div style={{backgroundImage: `url(${profilePic})`}} className="teamImage">
          <div className="tooltipcontainer person1"> Rita
            <span className="tooltiptext"><p>'Improvisando javascript'</p></span>
          </div>
          <div className="tooltipcontainer person2"> Estela
            <span className="tooltiptext"><p>'Minimalismo - es mi lema'</p></span>
          </div>
          <div className="tooltipcontainer person3"> Mery
            <span className="tooltiptext"><p>'Si contenido, luego existo'</p></span>
          </div>
          <div className="tooltipcontainer person4"> Ana
            <span className="tooltiptext"><p>'¿Big Data?Soy amante'</p></span>
          </div>
       </div>
       <div className="team-mobile">
        <div>
          <h4>Rita</h4>
          <p>'Improvisando en javascript'</p>
        </div>

        <div>
          <h4>Estela</h4>
          <p>'Minimalismo es mi lema'</p>
        </div>

        <div>
          <h4>Mery</h4>
          <p>'Si contenido, luego existo'</p>
        </div>

        <div>
          <h4>Ana</h4>
          <p>'¿Big Data?Soy amante'</p>
        </div>
       </div>
      </div>

    )
  }
}

export default Team
