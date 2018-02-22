import React, { Component } from 'react';
import profilePic from '../images/teampic2.jpg';



class Team extends Component {
  render() {
    return(
      <div className="teamWrapper">
        <h3 className="m-top-none section-title-font section-title team-title">Nuestro Equipo</h3>
       <div style={{backgroundImage: `url(${profilePic})`}} className="teamImage">
          <div class="tooltipcontainer person1"> Rita
            <span class="tooltiptext"><p>'Improvisando javascript'</p></span>
          </div>
          <div class="tooltipcontainer person2"> Estela
            <span class="tooltiptext"><p>'Minimalismo - es mi lema'</p></span>
          </div>
          <div class="tooltipcontainer person3"> Mery
            <span class="tooltiptext"><p>'Si contenido, luego existo'</p></span>
          </div>
          <div class="tooltipcontainer person4"> Ana
            <span class="tooltiptext"><p>'¿Big Data?Soy amante'</p></span>
          </div>
       </div>
       <div class="team-mobile">
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
