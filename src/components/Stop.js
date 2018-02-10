import React, { Component } from 'react';


class Stop extends Component {
  render() {
    return(
      <div className="marker">
      <p>{this.props.stop.stopId}</p>
      <p>{this.props.stop.postalAddress}</p>
      </div>
    )
  }
}

export default Stop
