/** Created by batmah on 16.10.16. */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';


ReactDOM.render(
  <Router>
    <div>
      <Link to="/user/1" >user1</Link>
      <Link to="/users" >users</Link>
      <Link to="/userswqewqe" >usersadas</Link>
      <Link to="/" >usersadas</Link>
      <Route exact path="/user/:id" component={App} />
      <Route exact path="/" component={App} />
    </div>
  </Router>, document.getElementById('app'));