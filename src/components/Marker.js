import React, { Component } from 'react';
import Bus from './Icons/Bus';


class Marker extends Component {
  render() {
    return(
      <div className="marker">
      <Bus className="bus-marker-map"/>
      </div>
    )
  }
}

export default Marker
