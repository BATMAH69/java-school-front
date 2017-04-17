/**
 * Created by batmah on 16.10.16.
 */
import React from 'react';
import { connect } from 'react-redux';

import { setCount, renewCount } from './actions'

const App = (props) => (
  <div>
    <div onClick={props.renewCount}>Hi {props.target} {props.count}</div>
    <input value={props.count} onChange={props.setCount} />
  </div>
);

App.propTypes = {
  target: React.PropTypes.string.isRequired,
  count: React.PropTypes.string.isRequired,
  setCount: React.PropTypes.func.isRequired
};

export default connect(
  store => ({count: store.app.count}),
  dispatch => ({
    setCount: event => dispatch(setCount(event.target.value)),
    renewCount: () => dispatch(renewCount),

  })
)(App);