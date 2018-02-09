import React, { Component } from 'react';

class PageResults extends Component {

  render() {
    return (
      <section className="section-results">
        <h4 className="m-top-none section-title">Resultados</h4>
        <div className="box-result flex">
          <div className="flex">
            <span className="number-bus">17</span>
            <div className="box-data-section">
              <h6 className="m-none data-title">Cibeles</h6>
              <p className="data-medium">Plaza de Cibeles con Pº Recoletos</p>
            </div>
          </div>
          <div className="flex box-info-icon">
            <img className="icon-bus" src="images/bus.png" alt="icono bus"/>
            <p className="m-none">Tiempo de espera: 3 min</p>
          </div>
        </div>
        <div className="box-result flex">
          <div className="flex">
            <span className="number-bus">17</span>
            <div className="box-data-section">
              <h6 className="m-none data-title">Cibeles</h6>
              <p className="data-medium">Plaza de Cibeles con Pº Recoletos</p>
            </div>
          </div>
          <div className="flex box-info-icon">
            <img className="icon-bus" src="images/bus.png" alt="icono bus"/>
            <p className="m-none">Tiempo de espera: 3 min</p>
          </div>
        </div>
        <div className="box-result flex">
          <div className="flex">
            <span className="number-bus">17</span>
            <div className="box-data-section">
              <h6 className="m-none data-title">Cibeles</h6>
              <p className="data-medium">Plaza de Cibeles con Pº Recoletos</p>
            </div>
          </div>
          <div className="flex box-info-icon">
            <img className="icon-bus" src="images/bus.png" alt="icono bus"/>
            <p className="m-none">Tiempo de espera: 3 min</p>
          </div>
        </div>
        <div className="box-result flex border-bottom-results">
          <div className="flex">
            <span className="number-bus">17</span>
            <div className="box-data-section">
              <h6 className="m-none data-title">Cibeles</h6>
              <p className="data-medium">Plaza de Cibeles con Pº Recoletos</p>
            </div>
          </div>
          <div className="flex box-info-icon">
            <img className="icon-bus" src="images/bus.png" alt="icono bus"/>
            <p className="m-none">Tiempo de espera: 3 min</p>
          </div>
        </div>
      </section>
    );
  }

}

export default PageResults;
