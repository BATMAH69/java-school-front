/**
 * Created by batmah on 16.10.16.
 */
import React, { Component } from 'react';

const Widget = (props) => (
  <div>
    <div>Hi {props.target} {props.message}</div>
    <input onChange={props.handlerUpdate} />
  </div>
);

Widget.propTypes = {
  target: React.PropTypes.string.isRequired,
  message: React.PropTypes.string.isRequired,
  handlerUpdate: React.PropTypes.func.isRequired
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
  target: React.PropTypes.string.isRequired
};

export default App;