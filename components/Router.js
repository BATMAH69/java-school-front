/**
 * Created by batmah on 24.10.16.
 */

import React from 'react';
import { Router, Route, hashHistory } from 'react-router'
import App from './App';
import About from './About';
import User from './User';

// arrow
const Routing = () => (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="about" component={About}/>
      <Route path="user/:userId" component={User}/>
    </Route>
  </Router>
);

export default Routing;