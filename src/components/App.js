import React, { Component } from 'react';
import { string } from 'prop-types'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.update = this.update.bind(this);
  }

  update(e) {
    this.setState({ count: e.target.value })
  }

  render() {
    return (
      <div>
        <div>Hi {this.props.target} {this.state.count}</div>
        <input onChange={this.update} />
      </div>
    )
  }
}

App.propTypes = {
  target: string.isRequired
};

export default App;