import React, { Component } from 'react';
import Bus from './Icons/Bus';
import PropTypes from 'prop-types';

class Marker extends Component {
  render() {
    let classes = "bus-marker-map";
    if (this.props.selected) {
      classes += " active-marker"
    }
    return(
      <div className="marker">
        <Bus className= { classes }/>
      </div>
    )
  }
}

Marker.propTypes = {
  selected: PropTypes.bool
};

export default Marker
