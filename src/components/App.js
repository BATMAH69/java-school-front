import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { string, func } from 'prop-types'

const Widget = ({ target, message, handlerUpdate }) => (
  <div>
    <div>Hi {target} {message}</div>
    <input onChange={handlerUpdate} />
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
      text: '',
      width: 0
    };
    this.update = this.update.bind(this);
    this.widgetRef = React.createRef();
  }

  update(e) {
    console.log();
    this.setState({
      text: e.target.value,
      width: ReactDOM.findDOMNode(this.widgetRef.current).offsetWidth
    })
  }

  render() {
    return (
      <div ref={this.widgetRef} style={{ display: 'inline-block' }}>
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
  target: string.isRequired
};

export default App;