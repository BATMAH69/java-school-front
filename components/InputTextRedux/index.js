/**
 * Created by batmah on 16.10.16.
 */
import React from 'react';
import { connect } from 'react-redux';

import {
  setCount
} from './actions'

//Для отображения обновлений
const Input = (props) => <input {...props} />;
const Span = (props) => <span {...props} />;

const style = {margin: 10};

const InputText = (props) => (
  <Span><Input style={style} value={props.count} onChange={props.setCount} /></Span>
);

InputText.propTypes = {
  name: React.PropTypes.string.isRequired,
  count: React.PropTypes.string,
  setCount: React.PropTypes.func.isRequired,
};

export default connect(
  (store, props) => ({
    count: store.app[props.name],
  }),
  (dispatch, props) => ({
    setCount: event => dispatch(setCount(event.target.value, props.name)),
  })
)(InputText);