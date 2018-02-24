import React, { Component } from 'react';
import Spinner from './Icons/Spinner';
import Card from './Card';
import PropTypes from 'prop-types';

class AllCards extends Component {

  handleClickPagination = event => {
    const numberPagination = document.querySelectorAll(".number-pagination");
    this.props.setCurrentPage(Number(event.target.id));
    for(let i = 0; i < numberPagination.length; i++) {
      numberPagination[i].classList.remove('active');
      event.target.classList.add('active');
    }
  }

  render(){

    const { currentPage, elementsPerPage, stopsBus, selectedStop } = this.props
    const hiddenResults = this.props.hidden ? 'hidden' : '';

    // Pagination
    const indexOfLastAll = currentPage * elementsPerPage;
    const indexOfFirstAll = indexOfLastAll - elementsPerPage;
    const currentElements = stopsBus.slice(indexOfFirstAll, indexOfLastAll);
    const renderElementsPage = currentElements.map((stop, index) => {
      return (
        <Card
          stop={stop}
          key={index}
          setCurrentStop={this.props.setCurrentStop}
          selected = {stop.stopId === selectedStop}
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
          <button onClick={this.handleClickPagination} className={"number-pagination button-light-font " + (number === 1 ? 'active' : "")} id={number} type="button" name="button">
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

AllCards.propTypes = {
  stopsBus: PropTypes.array,
  selectedStop: PropTypes.string,
  hidden: PropTypes.bool,
  currentPage: PropTypes.number,
  elementsPerPage: PropTypes.number,
  onClick: PropTypes.func,
  noResults: PropTypes.element,
  loading: PropTypes.bool
};

export default AllCards;
