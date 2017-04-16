/**
 * Created by batmah on 16.10.16.
 */
import React, { Component } from 'react';
import {connect} from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.update = this.update.bind(this);
  }

  update(e) {
    this.props.setCount(e.target.value);
  }

  render() {
    return (
      <div>
        <div>Hi {this.props.test} {this.props.target} {this.props.count}</div>
        <input onChange={this.update} />
      </div>
    )
  }
}

App.propTypes = {
  target: React.PropTypes.string.isRequired,
  count: React.PropTypes.number.isRequired,
  setCount: React.PropTypes.func.isRequired
};

export default connect(
  store => ({count: store.count}),
  dispatch => ({ setCount: (count) => dispatch({type:'INC', count})})
)(App);