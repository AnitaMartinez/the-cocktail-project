import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Stop from './components/Stop';
import Marker from './components/Marker';
import Bus from './components/Icons/Bus';
import Arrow from './components/Icons/Arrow';
import IconMarker from './components/Icons/IconMarker';
import FooterIcons from './components/Icons/FooterIcons';

//The cocktail
let latitude = 40.454207;
let longitude = -3.699970;
const radius = 500;

const idClient = "WEB.SERV.redlim@gmail.com";
const passKey = "FB5B0E17-88EB-407E-A222-97F0916E0C41";
const urlGetStopsFromXY = "https://openbus.emtmadrid.es:9443/emt-proxy-server/last/geo/GetStopsFromXY.php";

class App extends Component {

  fetchInfoBuses(latitude,longitude) {
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
      this.setState({
        stopsBus: data.stop,
      });
    })
  }

  constructor(props) {
    super(props);
    this.state = {
      stopsBus: [],
      center: {lat:40.41, lng:-3.70},
      zoom: 15
    }
    this.handleClickBilbao=this.handleClickBilbao.bind(this);
    this.handleClickCocktail=this.handleClickCocktail.bind(this);
    this.handleClickCampo=this.handleClickCampo.bind(this);
    this.fetchInfoBuses=this.fetchInfoBuses.bind(this);
  }


  handleClickBilbao(event){
    let latitudeBilbao = 40.429154;
    let longitudeBilbao = -3.701952;
    const radius = 500;

    this.fetchInfoBuses(latitudeBilbao,longitudeBilbao);
    this.setState({
      center:{lat:40.429154, lng:-3.701952},
      zoom: 15
    });
        return <GoogleMapReact
        center={this.state.center}
        zoom={this.state.zoom}/>
  }

  handleClickCocktail(event){
    let latitudeCocktail = 40.454146;
    let longitudeCocktail = -3.700346;
    const radius = 500;
    this.fetchInfoBuses(latitudeCocktail,longitudeCocktail);

    this.setState({
      center:{lat:40.454146, lng:-3.700346},
      zoom: 15
    });
    return <GoogleMapReact
    center={this.state.center}
    zoom={this.state.zoom}/>

  }

  handleClickCampo(event){
    let latitudeCampo = 40.614497;
    let longitudeCampo = -3.854413;
    const radius = 500;
    this.fetchInfoBuses(latitudeCampo,longitudeCampo);

    this.setState({
      center:{lat:40.614497, lng:-3.854413},
      zoom: 15
    });

    return <GoogleMapReact
    center={this.state.center}
    zoom={this.state.zoom}/>
  }

  render() {
    console.log(this.state.stopsBus)
    const stopsBus = this.state.stopsBus;

    return (
      <div>
        <section className="hero">
          <h1 className="hero-title uppercase margin-title center">bus app</h1>
          <p className="hero-subtitle center padding-subtitle">El mundo, en la palma de tu mano</p>
          <Arrow className="arrow-down"/>
        </section>
        <main className= "home" id="intro">
          <div className= "intro">
            <IconMarker className="marker-icon-intro" />
            <h2 className= "home-title introduction-title center">Bienvenido a BusApp</h2>
            <p className= "home-text introduction-body center">Para comenzar, elige una zona para descubrir las paradas disponibles</p>
            <div className= "home-menu-buttons">
              <a href="#map"><button onClick={this.handleClickBilbao} className= "home-button main-button button-light-font" type="button" name="button">Glorieta de bilbao</button></a>
              <a href="#map"><button onClick={this.handleClickCocktail} className= "home-button main-button button-light-font" type="button" name="button">The cocktail</button></a>
              <a href="#map"><button onClick={this.handleClickCampo} className= "home-button main-button button-light-font" type="button" name="button">El campo</button></a>
            </div>
          </div>

          <div className="map" id="map">
            <GoogleMapReact
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
            center={this.state.center}
            zoom={this.state.zoom}
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

        <section className="section-cards">
          <h4 className="m-top-none section-title-font section-title">Resultados</h4>
          <div className="container-cards">
            <div className="card flex m-right-tablet-desktop m-bottom-tablet-desktop ">
              <div className="flex">
                <span className="number-bus">17</span>
                <div className="box-data-card">
                  <h6 className="m-none data-title">Cibeles</h6>
                  <p className="data-medium">Plaza de Cibeles con Pº Recoletos</p>
                </div>
              </div>
              <div className="flex box-icon-card">
                <Bus className="bus-card"/>
                <p className="m-none">Tiempo de espera: 3 min</p>
              </div>
            </div>
            <div className="card flex m-bottom-tablet-desktop ">
              <div className="flex">
                <span className="number-bus">17</span>
                <div className="box-data-card">
                  <h6 className="m-none data-title">Cibeles</h6>
                  <p className="data-medium">Plaza de Cibeles con Pº Recoletos</p>
                </div>
              </div>
              <div className="flex box-icon-card">
                <Bus className="bus-card"/>
                <p className="m-none">Tiempo de espera: 3 min</p>
              </div>
            </div>
            <div className="card flex m-right-tablet-desktop">
              <div className="flex">
                <span className="number-bus">17</span>
                <div className="box-data-card">
                  <h6 className="m-none data-title">Cibeles</h6>
                  <p className="data-medium">Plaza de Cibeles con Pº Recoletos</p>
                </div>
              </div>
              <div className="flex box-icon-card">
                <Bus className="bus-card"/>
                <p className="m-none">Tiempo de espera: 3 min</p>
              </div>
            </div>
            <div className="card flex border-bottom-card">
              <div className="flex">
                <span className="number-bus">17</span>
                <div className="box-data-card">
                  <h6 className="m-none data-title">Cibeles</h6>
                  <p className="data-medium">Plaza de Cibeles con Pº Recoletos</p>
                </div>
              </div>
              <div className="flex box-icon-card">
                <Bus className="bus-card"/>
                <p className="m-none">Tiempo de espera: 3 min</p>
              </div>
            </div>
          </div>
        </section>

        <div className="box-goUp">
          <a className="link-goUp" href="#">Volver arriba</a>
        </div>

        </main>

        <footer className="footer footer-font">
          <FooterIcons className="icons-footer"/>
          <p>Hecho por 'Las Apis' de Adalab</p>
        </footer>

      </div>
    );
  }

  componentDidMount () {
    this.fetchInfoBuses(latitude,longitude)
  }
}

App.defaultProps={
  center: {lat:40.41, lng:-3.70},
  zoom: 1
};




export default App;
