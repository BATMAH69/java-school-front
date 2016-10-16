/**
 * Created by batmah on 16.10.16.
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const Widget = ({ target, message, handlerUpdate }) => (
  <div>
    <div>Hi {target} {message}</div>
    <input onChange={handlerUpdate} />
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
      text: '',
      width: 0
    };
    this.update = this.update.bind(this);
  }

  update(e) {
    console.log();
    this.setState({
      text: e.target.value,
      width: ReactDOM.findDOMNode(this.refs.widget).offsetWidth
    })
  }

  render() {
    return (
      <div ref="widget" style={{ display: 'inline-block' }}>
        <Widget
          target={this.props.target}
          message={this.state.text}
          handlerUpdate={this.update}
        />
        <div>{this.state.width}</div>
      </div>
    );
  }
}

App.propTypes = {
  target: React.PropTypes.string.isRequired
};

export default App;