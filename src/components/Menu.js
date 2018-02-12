import React, { Component } from 'react';
import MenuButton from './Icons/MenuButton';
import CloseButton from './Icons/CloseButton';


class Menu extends Component {
  constructor(props){
    super(props)
    this.state = {
      close : true
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
      this.setState({close : !this.state.close});
  }

  render(){
    const menuClose = this.state.close ? '' : 'menu-visible';

    return (
      <div className="menu-display">

        <header className="hamburguer" onClick={this.handleClick}>
          <MenuButton className="menu-hamburger" />
        </header>

        <nav className={`${menuClose} background-menu`}>

          <div className="close-button">
            <CloseButton />
          </div>

          <ul>

            <li className="background-menu-link">
              <a className="menu-link">Busca tu parada</a>
            </li>

            <li className="background-menu-link">
              <a className="menu-link">Mi grupo</a>
            </li>

            <li className="background-menu-link">
              <a className="menu-link">About us</a>
            </li>

          </ul>

        </nav>

      </div>
    );
  }
}

export default Menu;
