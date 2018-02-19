import React, { Component } from 'react';
import MenuButton from './Icons/MenuButton';
import CloseButton from './Icons/CloseButton';


class Menu extends Component {
  constructor(props){
    super(props)
    this.state = {
      close : true
    }
  }

  handleClick = () => {
      this.setState({close : !this.state.close});
  }

  render(){
    const menuClose = this.state.close ? '' : 'menu-visible';

    return (
      <div className={`menu-display ${menuClose}`}>

        <button aria-label="Menú" className="no-style-button hamburguer fixed" onClick={this.handleClick}>
          <MenuButton className=""  />
        </button>

        <nav className="background-menu">

          <ul className="list-style">

            <button className="background-menu-link no-style-button">
              <a className="menu-link uppercase">Busca tu parada</a>
            </button>

            <button className="background-menu-link no-style-button">
              <a className="menu-link uppercase">Mi grupo</a>
            </button>

            <button className="background-menu-link no-style-button">
              <a className="menu-link uppercase">About us</a>
            </button>

            <button aria-label="Cerrar" className="no-style-button"><CloseButton className="close-button" onClick={this.handleClick} /></button>

          </ul>

        </nav>

      </div>
    );
  }
}

export default Menu;
