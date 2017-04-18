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
  count: React.PropTypes.string.isRequired,
  setCount: React.PropTypes.func.isRequired,
};
InputText.defaultProps = {
  count: '',
};

const InputTextReduxFactory = (name) => connect(
  store => ({
    count: store.app[name],
  }),
  dispatch => ({
    setCount: event => dispatch(setCount(event.target.value, name)),
  })
)(InputText);

export default class InputTextRedux extends React.Component{
  shouldComponentUpdate(){
    return false; // Почему тут false??????
  }
  render(){
    const Component = InputTextReduxFactory(this.props.name);
    return <Component />
  }
}