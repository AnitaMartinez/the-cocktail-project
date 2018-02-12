import React, { Component } from 'react';


class Card extends Component {
  render() {
    const stopsBusLines = this.props.stop.line;
    let numberLine = "";
    if(stopsBusLines.length === undefined) {
      numberLine = <span className="number-bus">{stopsBusLines.line}</span>
    } else {
      numberLine = stopsBusLines.map(function(line, index) {
      return <span className="number-bus">{line.line}</span>
        })
    }

    return(
      <div className="card flex m-right-tablet-desktop m-bottom-tablet-desktop ">
        <div className="flex">
          {numberLine}
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
