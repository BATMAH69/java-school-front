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
    count2: store.app.count2,
    count3: store.app.count3,
    count4: store.app.count4,
    count5: store.app.count5,
    count6: store.app.count6,
    count7: store.app.count7,
    count8: store.app.count8,
    count9: store.app.count9,
  }),
  dispatch => ({
    setCount0: event => dispatch(setCount0(event.target.value)),
    setCount1: event => dispatch(setCount1(event.target.value)),
    setCount2: event => dispatch(setCount2(event.target.value)),
    setCount3: event => dispatch(setCount3(event.target.value)),
    setCount4: event => dispatch(setCount4(event.target.value)),
    setCount5: event => dispatch(setCount5(event.target.value)),
    setCount6: event => dispatch(setCount6(event.target.value)),
    setCount7: event => dispatch(setCount7(event.target.value)),
    setCount8: event => dispatch(setCount8(event.target.value)),
    setCount9: event => dispatch(setCount9(event.target.value)),
    renewCount: () => dispatch(renewCount),
  })
)(App);