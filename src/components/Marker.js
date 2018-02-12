import React, { Component } from 'react';
import IconMarker from './Icons/IconMarker';


class Marker extends Component {
  render() {
    return(
      <div className="marker">
      <IconMarker className="icon-marker-map"/>
      </div>
    )
  }
}

export default Marker
