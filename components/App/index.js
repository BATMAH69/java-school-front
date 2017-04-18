/**
 * Created by batmah on 16.10.16.
 */
import React from 'react';
import { connect } from 'react-redux';

import { setCount, renewCount } from './actions'

//Для отображения обновлений
const Input = (props) => <input {...props} />;
const Div = (props) => <div {...props} />;

const App = (props) => (
  <Div>
    <Div onClick={props.renewCount}>
      <Div>Hi {props.target} VERY BIG ELEMENT</Div>
      <Div>{props.count}</Div>
    </Div>
    <Input value={props.count} onChange={props.setCount} />
  </Div>
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