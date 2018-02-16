import React, { Component } from 'react';
import Bus from './Icons/Bus';

class Marker extends Component {
  render() {
    let classes = "bus-marker-map";
    if (this.props.selected) {
      classes += " selected-marker"
    }
    return(
      <div className="marker">
        <Bus className= { classes }/>
      </div>
    )
  }
}

export default Marker
