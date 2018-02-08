import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';


class App extends Component {
  render() {
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
}

App.defaultProps={
  center: {lat:40.41, lng:-3.70},
  zoom: 12
};

export default App;
