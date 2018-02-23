import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './Router';
import { HashRouter } from 'react-router-dom';

ReactDOM.render(
  <HashRouter>
  <Router />
  </HashRouter>,
  document.getElementById('root'));
