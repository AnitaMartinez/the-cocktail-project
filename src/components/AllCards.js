import React, { Component } from 'react';
import Spinner from './Icons/Spinner';
import Card from './Card'


class AllCards extends Component {

  render(){
    const stopsBus = this.props.stopsBus;
    const selectedStop= this.props.selectedStop;
    const hiddenResults = this.props.hidden ? 'hidden' : '';

    // Pagination
    const currentPage = this.props.currentPage
    const elementsPerPage = this.props.elementsPerPage
    const indexOfLastAll = currentPage * elementsPerPage;
    const indexOfFirstAll = indexOfLastAll - elementsPerPage;
    const currentElements = stopsBus.slice(indexOfFirstAll, indexOfLastAll);
    const renderElementsPage = currentElements.map((stop, index) => {
      return (
        <Card
          stop={stop}
          key={index}
          setCurrentStop={this.props.setCurrentStop}
          selected = {stop === selectedStop}
        />
      )
    });
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(stopsBus.length / elementsPerPage); i++) {
      pageNumbers.push(i);
    }
    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <li key={number}>
          <button onClick={this.props.onClick} className={"number-pagination button-light-font " + (number === 1 ? 'active' : "")} id={number} type="button" name="button">
            {number}
          </button>
        </li>
      );
    });

    return(
      <section className={`section-cards ${hiddenResults}`}>
      <h3 className="m-top-none section-title-font section-title">Resultados</h3>
      {this.props.noResults}
      { this.props.loading ? null : <Spinner/>  }
      <div className="container-cards">
      {renderElementsPage}
      </div>
      <ul id="page-numbers flex" className="list-pagination">
      {renderPageNumbers}
      </ul>
      </section>
    )
  }
}

export default AllCards;
