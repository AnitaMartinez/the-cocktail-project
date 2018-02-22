import React, { Component } from 'react';
import Bus from './Icons/Bus';
import PropTypes from 'prop-types';

class Marker extends Component {

  clickMarker = () => {
    this.props.setCurrentStop(this.props.stopId);
  }

  render() {
    let classesIcon = "bus-marker-map";
    let classesToolTip = "hidden container-text-marker marker-font"
    if (this.props.selected) {
      classesIcon += " active-icon-marker"
      classesToolTip += " block"
    }

    return(
      <div>
        <div className="marker" onClick={this.clickMarker} viewBox="0 0 24 28">
          <div  className= { classesToolTip } >
            <h6 className="title-button-marker uppercase" > {this.props.stop.name} </h6>
            <p>  {this.props.stop.postalAddress} </p>
          </div>
        </div>
        <Bus className= { classesIcon }/>
      </div>
    )
  }
}

Marker.propTypes = {
  selected: PropTypes.bool,
  stop: PropTypes.object
};

export default Marker
