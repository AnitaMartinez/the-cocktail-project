import React, { Component } from 'react';
import Bus from './Icons/Bus';
import PropTypes from 'prop-types';

class Marker extends Component {

  clickMarker = () => {
    this.props.setCurrentStop(this.props.stopId);
  }

  render() {
    let classes = "bus-marker-map";
    let classesToolTip = "hidden button-marker"
    if (this.props.selected) {
      classes += " active-marker"
      classesToolTip += " block"
    }

    return(
      <div className="marker" onClick={this.clickMarker} >
        <Bus className= { classes }/>

        <button  className= { classesToolTip } type="button" name="button">
          Dirección: {this.props.stop.postalAddress}
        </button>

      </div>
    )
  }
}

Marker.propTypes = {
  selected: PropTypes.bool
};

export default Marker
