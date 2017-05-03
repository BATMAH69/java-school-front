/** Created by batmah on 16.10.16. */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

const style = {
  link: {
    padding: 5
  },
  container:{
    textAlign: 'center'
  }
};

ReactDOM.render(
  <Router>
    <div style={style.container}>
      <Link style={style.link} to="/user/1">/user/1</Link>
      <Link style={style.link} to="/user/asdasda">/user/asdasda</Link>
      <Link style={style.link} to="/user/342342">/user/342342</Link>
      <Link style={style.link} to="/users">/users</Link>
      <Link style={style.link} to="/userswqewqe">/userswqewqe</Link>
      <Link style={style.link} to="/">/</Link>
      <Route exact path="/user/:id" component={App} />
      <Route exact path="/" component={App} />
    </div>
  </Router>, document.getElementById('app'));