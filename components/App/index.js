/**
 * Created by batmah on 16.10.16.
 */
import React from 'react';
import { connect } from 'react-redux';

import {
  setCount,
  renewCount
} from './actions'

//Для отображения обновлений
const Input = (props) => <input {...props} />;
const Div = (props) => <div {...props} />;
const Span = (props) => <span {...props} />;

const style = {margin: 10};

const Counts = connect(
  store => ({
    count0: store.app.count0,
    count1: store.app.count1,
  })
)((props) => <Div>{props.count0+' '+props.count1}</Div>);

const InputText = (props) => (
  <Span><Input style={style} value={props.count} onChange={props.setCount} /></Span>
);

const InputTextRedux = connect(
  (store, props) => ({
    count: store.app[props.name],
  }),
  (dispatch, props) => ({
    setCount: event => dispatch(setCount(event.target.value, props.name)),
  })
)(InputText);

const App = (props) => (
  <Div>
    <Div onClick={props.renewCount}>
      <Div>Hi {props.target} VERY BIG ELEMENT</Div>
      <Counts />
    </Div>
    <InputTextRedux name={'count0'} />
    <InputTextRedux name={'count1'} />
    <InputTextRedux name={'count2'} />
    <InputTextRedux name={'count3'} />
    <InputTextRedux name={'count4'} />
    <InputTextRedux name={'count5'} />
    <InputTextRedux name={'count6'} />
    <InputTextRedux name={'count7'} />
    <InputTextRedux name={'count8'} />
    <InputTextRedux name={'count9'} />
  </Div>
);

export default connect(
  null,
  dispatch => ({
    renewCount: () => dispatch(renewCount),
  })
)(App);