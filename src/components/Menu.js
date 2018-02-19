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

        <MenuButton className="hamburguer fixed" onClick={this.handleClick} />

        <nav className="background-menu">

          <ul className="list-style">

            <li className="background-menu-link">
              <a className="menu-link uppercase">Busca tu parada</a>
            </li>

            <li className="background-menu-link">
              <a className="menu-link uppercase">Mi grupo</a>
            </li>

            <li className="background-menu-link">
              <a className="menu-link uppercase">About us</a>
            </li>

            <li><CloseButton className="close-button" onClick={this.handleClick} /></li>

          </ul>

        </nav>

      </div>
    );
  }
}

export default Menu;
