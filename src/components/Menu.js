import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
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
          <MenuButton />
        </button>

        <nav className="background-menu">

          <ul className="list-style">

            <li className="background-menu-link">
              <HashLink to='/#intro' className="menu-link uppercase" onClick={this.handleClick}>Busca tu parada</HashLink>
            </li>

            <li className="background-menu-link">
              <HashLink to='/team#team' replace className="menu-link uppercase" onClick={this.handleClick}>Nuestro equipo</HashLink>
            </li>

            <li className="background-menu-link">
              <HashLink to='/about#about' replace className="menu-link uppercase" onClick={this.handleClick}>Sobre este proyecto</HashLink>
            </li>

            <button aria-label="Cerrar" className="no-style-button"><CloseButton className="close-button" onClick={this.handleClick} /></button>

          </ul>

        </nav>

      </div>
    );
  }
}

export default Menu;
