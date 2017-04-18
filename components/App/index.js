/**
 * Created by batmah on 16.10.16.
 */
import React from 'react';
import { connect } from 'react-redux';

import { setCount, renewCount } from './actions'

//Для отображения обновлений
const Input = (props) => <input {...props} />;
const Div = (props) => <div {...props} />;

const Count = connect(
  store => ({count: store.app.count}),
  dispatch => ({ renewCount: () => dispatch(renewCount) })
)((props) => <Div>{props.count}</Div>);

const CountInput = connect(
  store => ({count: store.app.count}),
  dispatch => ({ setCount: event => dispatch(setCount(event.target.value)) })
)((props) => <Input value={props.count} onChange={props.setCount} />);


const App = (props) => (
  <Div>
    <Div onClick={props.renewCount}>
      <Count />
      <Div>Hi {props.target} VERY BIG ELEMENT</Div>
    </Div>
    <CountInput value={props.count} onChange={props.setCount} />
  </Div>
);

App.propTypes = {
  target: React.PropTypes.string.isRequired,
};

export default App;