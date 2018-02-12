import React, { Component } from 'react';


class Card extends Component {
  render() {
    return(
      <div className="card flex m-right-tablet-desktop m-bottom-tablet-desktop ">
        <div className="flex">
          <span className="number-bus">{this.props.stop.line.line}</span>
          <div className="box-data-card">
            <h6 className="m-none data-title">{this.props.stop.name}</h6>
            <p className="data-medium">{this.props.stop.postalAddress}</p>
          </div>
        </div>
        <div className="flex box-icon-card">
          <img className="icon-bus" src="images/bus.png" alt="icono bus"/>
          <p className="m-none">Parada: {this.props.stop.stopId} </p>
        </div>
      </div>
    )
  }
}

export default Card
