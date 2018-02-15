import React, { Component } from 'react';
import Bus from './Icons/Bus';


class Marker extends Component {
  render() {
    let classes = "marker";
    if (this.props.selected) {
      classes += " selected-marker"
    }
    return(
      <div className= { classes }>
      <Bus className="bus-marker-map"/>
      </div>
    )
  }
}

export default Marker
