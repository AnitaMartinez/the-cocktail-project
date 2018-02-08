import React, { Component } from 'react';
import { GoogleApiWrapper } from 'google-maps-react'
import MapContainer from './MapContainer'

//The cocktail
let latitude = 40.454207;
let longitude = -3.699970;
const radius = 500;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stopsBus: {},
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
          stopsBus: data,
        });
    })
  }

  render() {
    console.log(this.state.stopsBus);
    const center= {
    lat:40.4893538,
    lng:-3.6827461
    }
    return (
      <div>
        <MapContainer google={this.props.google} />
      </div>
    );
  }

  componentDidMount() {
    this.fetchInfoBuses();
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyB8FhzRqKaI35lFpQQLuYEVSJfCGsPgM2Q',
})(App)
