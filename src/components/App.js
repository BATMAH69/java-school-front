import React, { Component } from 'react';
import { string, func } from 'prop-types'

const Widget = (props) => (
  <div>
    <div>Hi {props.target} {props.message}</div>
    <input onChange={props.handlerUpdate} />
  </div>
);

Widget.propTypes = {
  target: string.isRequired,
  message: string.isRequired,
  handlerUpdate: func.isRequired
};

Widget.defaultProps = {
  target: 'world'
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
    this.update = this.update.bind(this);
  }

  update(e) {
    this.setState({ text: e.target.value })
  }

  render() {
    return (
      <div>
        <Widget
          target={this.props.target}
          message={this.state.text}
          handlerUpdate={this.update}
        />
        <Widget
          target={this.props.target}
          message={this.state.text}
          handlerUpdate={this.update}
        />
        <Widget
          target={this.props.target}
          message={this.state.text}
          handlerUpdate={this.update}
        />
      </div>
    );
  }
}

App.propTypes = {
  target: string.isRequired
};

export default App;