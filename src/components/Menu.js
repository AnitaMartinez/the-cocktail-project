import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
              <Link to='/' className="menu-link uppercase" onClick={this.handleClick}>Busca tu parada</Link>
            </li>

            <li className="background-menu-link">
              <Link to='/team' className="menu-link uppercase" onClick={this.handleClick}>Nuestro equipo</Link>
            </li>

            <li className="background-menu-link">
              <Link to='/about' className="menu-link uppercase" onClick={this.handleClick}>Sobre este proyecto</Link>
            </li>

            <button aria-label="Cerrar" className="no-style-button"><CloseButton className="close-button" onClick={this.handleClick} /></button>

          </ul>

        </nav>

      </div>
    );
  }
}

export default Menu;
