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

const InputText = (props) => (
  <Input value={props.count} onChange={props.setCount} />
);

InputText.propTypes = {
  name: React.PropTypes.string.isRequired,
  count: React.PropTypes.string.isRequired,
  setCount: React.PropTypes.func.isRequired,
};

InputText.defaultProps = {
  count: '',
};

export default connect(
  (store, props) => ({
    count: store.app[props.name],
  }),
  (dispatch, props) => ({
    setCount: event => dispatch(setCount(event.target.value, props.name)),
  })
)(InputText);