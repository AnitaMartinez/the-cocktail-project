import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import PageResults from './components/PageResults'
import Stop from './components/Stop'
import Marker from './components/Marker'

//The cocktail
let latitude = 40.454207;
let longitude = -3.699970;
const radius = 500;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stopsBus: [],
    }
  }

  fetchInfoBuses() {
    const idClient = "WEB.SERV.redlim@gmail.com";
    const passKey = "FB5B0E17-88EB-407E-A222-97F0916E0C41";
    const urlGetStopsFromXY = "https://openbus.emtmadrid.es:9443/emt-proxy-server/last/geo/GetStopsFromXY.php";
    const that = this
    fetch(urlGetStopsFromXY, {
      method: "POST",
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body:
      "idClient="+idClient+"&passKey="+passKey+"&latitude="+latitude+"&longitude="+longitude+"&Radius="+radius+"&statistics=&cultureInfo=",
    }).then((response) => {
      return response.json();
    }).then((data) => {
      that.setState({
        stopsBus: data.stop,
      });
    })
  }

  render() {
    const stopsBus = this.state.stopsBus;
    return (
      <div>
        <section className="hero">
          <h1 className="hero-title uppercase margin-title center">bus app</h1>
            <p className="hero-subtitle center padding-subtitle">El mundo, en la palma de tu mano</p>
        </section>
        <main className= "home">
          <div className= "intro">
            <img src="images/marker-icon.svg" className= "marker-icon-intro" alt="icono de marker"/>
            <h2 className= "home-title introduction-title center">Bienvenido a BusApp</h2>
            <p className= "home-text introduction-body center">Para comenzar, elige una zona para descubrir las paradas disponibles</p>
            <div className= "home-menu-buttons">
              <button className= "home-button main-button button-light-font" type="button" name="button">Glorieta de bilbao</button>
              <button className= "home-button main-button button-light-font" type="button" name="button">The cocktail</button>
              <button className= "home-button main-button button-light-font" type="button" name="button">El campo</button>
            </div>
          </div>

          <div className="map">
            <GoogleMapReact
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
            bootstrapURLKeys={{key: 'AIzaSyC7n0BhHlxsVU_li9hGJMFIFbYQcFqaggw'}}
            >
            {stopsBus.map(function(stop, index) {
            return <Marker lng={stop.longitude} lat={stop.latitude} key={index}/>
              })}
            </GoogleMapReact>
        </div>

        <div className="busStop">
          {stopsBus.map(function(stop, index) {
          return <Stop stop={stop} key={index}/>
          })}
        </div>
        <PageResults/>
        </main>

      </div>
    );
  }

  componentDidMount () {
    this.fetchInfoBuses()
  }
}

App.defaultProps= {
  center: {lat:40.41, lng:-3.70},
  zoom: 12
}

export default App;
