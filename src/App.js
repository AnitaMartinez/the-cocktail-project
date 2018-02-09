import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

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
    return (
      <div style={{width:'400px', height: '400px'}}>
      <GoogleMapReact
      defaultCenter={this.props.center}
      defaultZoom={this.props.zoom}
      bootstrapURLKeys={{key: 'AIzaSyC7n0BhHlxsVU_li9hGJMFIFbYQcFqaggw'}}
      >
      </GoogleMapReact>

      </div>
    );
  }

  componentDidMount() {
    this.fetchInfoBuses();
  }
}

App.defaultProps={
  center: {lat:40.41, lng:-3.70},
  zoom: 12
};

export default App;
