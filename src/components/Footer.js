import React, { Component } from 'react';
import Twitter from './Icons/Twitter';
import Github from './Icons/Github';


class Footer extends Component {
  render(){
    return(
    <footer className="footer footer-font">
      <div className="icons-footer">
        <a href="https://twitter.com/AdaLab_Digital" target="_blank" rel="noopener noreferrer"><Twitter className="twitter-footer"/></a>
        <a href="https://github.com/Adalab/the-cocktail-project" target="_blank" rel="noopener noreferrer"><Github className="github-footer" /></a>
      </div>
      <p>Hecho por 'Las Apis' de Adalab</p>
    </footer>
    )
  }
}

export default Footer;
