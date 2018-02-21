import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './components/Marker';
import IconMarker from './components/Icons/IconMarker';
import Footer from './components/Footer';
import Menu from './components/Menu';
import StickyMenu from './components/StickyMenu';
import EmptyState from './components/EmptyState';
import Hero from './components/Hero';
import AllCards from './components/AllCards';
import PropTypes from 'prop-types';
import Team from './components/Team';
import CodeSearcher from './components/CodeSearcher';


const madridCoors= {
  lat: 40.41,
  lng: -3.70
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stopsBus: [],
      datafetch: false,
      loading: false,
      currentPage: 1,
      elementsPerPage: 6,
      center: madridCoors,
      zoom: 15,
      hidden: true,
      selectedStop: null,
      currentCard: null
    };
  }

  setCurrentStop = stop => {
    this.setState({
      selectedStop: stop
    });
  }

  handleClickPagination = event => {
    const numberPagination = document.querySelectorAll(".number-pagination");
    this.setState({
      currentPage: Number(event.target.id)
    });
    for(let i = 0; i < numberPagination.length; i++) {
      numberPagination[i].classList.remove('active');
      event.target.classList.add('active');
    }
  }

  fetchInfoBuses = (latitude,longitude) => {
    const radius = 500;
    const idClient = "WEB.SERV.redlim@gmail.com";
    const passKey = "FB5B0E17-88EB-407E-A222-97F0916E0C41";
    const urlGetStopsFromXY = "https://openbus.emtmadrid.es:9443/emt-proxy-server/last/geo/GetStopsFromXY.php";

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
        stopsBus: data.stop || [],
        loading : true,
        datafetch: true,
        hidden: false,
        selectedStop: data.stop ? data.stop[0] : null
      });
    })
  }

  handleClickBilbao = event => {
    let latitudeBilbao = 40.429154;
    let longitudeBilbao = -3.701952;
    this.fetchInfoBuses(latitudeBilbao,longitudeBilbao);
    this.setState({
      center:{lat:latitudeBilbao, lng:longitudeBilbao},
      zoom: 15,
      hidden: false,
    });
    return (
      <GoogleMapReact
        center={this.state.center}
        zoom={this.state.zoom}
      />
    )
  }

  handleClickCocktail = event => {
    let latitudeCocktail = 40.454146;
    let longitudeCocktail = -3.700346;
    this.fetchInfoBuses(latitudeCocktail,longitudeCocktail);
    this.setState({
      center:{lat:latitudeCocktail, lng:longitudeCocktail},
      zoom: 15,
      hidden: false
    });
    return (
      <GoogleMapReact
      center={this.state.center}
      zoom={this.state.zoom}
      />
    )
  }

  handleClickCampo = event => {
    let latitudeCampo = 40.640772;
    let longitudeCampo = -3.909992;
    this.fetchInfoBuses(latitudeCampo,longitudeCampo);
    this.setState({
      center:{lat:latitudeCampo, lng:longitudeCampo},
      zoom: 15,
      hidden: false
    });
    return (
      <GoogleMapReact
        center={this.state.center}
        zoom={this.state.zoom}
      />
    )
  }

  render() {
    const stopsBus = this.state.stopsBus;
    const selectedStop= this.state.selectedStop;
    let markers= null;
    let noResults= null;

    if(this.state.datafetch) {
      if (stopsBus.length > 0) {
        markers= stopsBus.map((stop, index)=> {
          return (
            <Marker
              lng={stop.longitude}
              lat={stop.latitude}
              key={index}
              selected = { stop === selectedStop }
            />
          )
        });
      } else {
        noResults= <EmptyState/>
      }
    }

    return (
      <div>
      <Menu/>
      <Hero/>
      <StickyMenu/>

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

            <CodeSearcher />
        </div>

        <div className="map" id="map">
          <GoogleMapReact
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
            center={this.state.center}
            zoom={this.state.zoom}
            bootstrapURLKeys={{key: 'AIzaSyC7n0BhHlxsVU_li9hGJMFIFbYQcFqaggw'}}
          >
            {markers}
          </GoogleMapReact>
        </div>

        <AllCards
          loading={this.state.loading}
          hidden={this.state.hidden}
          noResults={noResults}
          currentPage={this.state.currentPage}
          elementsPerPage={this.state.elementsPerPage}
          stopsBus={this.state.stopsBus}
          selectedStop={this.state.selectedStop}
          setCurrentStop={this.setCurrentStop}
          onClick={this.handleClickPagination}
        />

        <div className="box-goUp">
          <a className="link-goUp" href="#intro">Volver arriba</a>
        </div>

      </main>

      <Footer/>
      </div>
    );
  }
}

App.defaultProps= {
  center: madridCoors,
  zoom: 12
};

GoogleMapReact.propTypes = {
  center: PropTypes.object,
  zoom: PropTypes.number
};

export default App;
