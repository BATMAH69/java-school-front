/**
 * Created by batmah on 16.10.16.
 */
import React from 'react';
import { connect } from 'react-redux';

import {
  setCount0,
  setCount1,
  setCount2,
  setCount3,
  setCount4,
  setCount5,
  setCount6,
  setCount7,
  setCount8,
  setCount9,
  renewCount
} from './actions'

//Для отображения обновлений
const Input = (props) => <input {...props} />;
const Div = (props) => <div {...props} />;

const App = (props) => (
  <Div>
    <Div onClick={props.renewCount}>
      <Div>Hi {props.target} VERY BIG ELEMENT</Div>
      <Div>{props.count0+' '+props.count1}</Div>
    </Div>
    <Input value={props.count0} onChange={props.setCount0} />
    <Input value={props.count1} onChange={props.setCount1} />
    <Input value={props.count2} onChange={props.setCount2} />
    <Input value={props.count3} onChange={props.setCount3} />
    <Input value={props.count4} onChange={props.setCount4} />
    <Input value={props.count5} onChange={props.setCount5} />
    <Input value={props.count6} onChange={props.setCount6} />
    <Input value={props.count7} onChange={props.setCount7} />
    <Input value={props.count8} onChange={props.setCount8} />
    <Input value={props.count9} onChange={props.setCount9} />
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