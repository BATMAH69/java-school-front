/**
 * Created by batmah on 16.10.16.
 */
import React from 'react';
import { connect } from 'react-redux';

import InputTextRedux from '../InputTextRedux';
import { renewCount } from './actions'


//Для отображения обновлений

const Div = (props) => <div {...props} />;

const App = (props) => (
  <Div>
    <Div onClick={props.renewCount}>
      <Div>Hi {props.target} VERY BIG ELEMENT</Div>
      <Div>{props.count0+' '+props.count1}</Div>
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

App.propTypes = {
  target: React.PropTypes.string.isRequired
};

export default connect(
  store => ({
    count0: store.app.count0,
    count1: store.app.count1,

  }),
  dispatch => ({
    renewCount: () => dispatch(renewCount),
  })
)(App);