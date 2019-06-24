import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { string, func, node } from 'prop-types'

const Widget = ({ handlerUpdate, children }) => (
  <div>
    {children}
    <input onChange={handlerUpdate} />
  </div>
);

Widget.propTypes = {
  handlerUpdate: func.isRequired,
  children: node.isRequired
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
    this.setState({
      text: e.target.value,
      width: ReactDOM.findDOMNode(this.widgetRef.current).offsetWidth
    })
  }

  render() {
    return (
      <div ref={this.widgetRef} style={{ display: 'inline-block' }}>
        <Widget
          handlerUpdate={this.update}
        >
          <div>Hi {this.props.target} {this.state.text}</div>
        </Widget>
        <div>{this.state.width}</div>
      </div>
    );
  }
}

App.propTypes = {
  target: string.isRequired
};

export default App;