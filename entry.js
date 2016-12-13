 'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/static/Home';
import Projects from './components/static/Projects'
import NotFound from './components/static/NotFound';
import { createStore, combineReducers } from 'redux';
import {Router,Route,hashHistory,IndexRoute} from 'react-router';
import About from './components/static/About';
import Contact from './components/static/Contact';
import App from './app';


ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path ='/projects' component={Projects} />
      <Route path='/about' component={About} />
      <Route path='/contact' component={Contact} />
      <Route path='*' component={NotFound} />
    </Route>
  </Router>,
  document.getElementById('root')
);
