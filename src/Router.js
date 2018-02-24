import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import App from './App';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Menu from './components/Menu';
import StickyMenu from './components/StickyMenu';
import Team from './components/Team';
import About from './components/About';


class Router extends Component {

  render() {
    return(
      <div>
        <Menu/>
        <Hero/>
        <StickyMenu/>
        <Switch>
          <Route exact path='/' component = { App } />
          <Route path='/team' component = { Team } />
          <Route path='/about' component = { About } />
        </Switch>
        <Footer/>
      </div>
    )
  }
}

export default Router;
