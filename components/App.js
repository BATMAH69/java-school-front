/**
 * Created by batmah on 16.10.16.
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const Widget = ({ handlerUpdate, children }) => (
  <div>
    {children}
    <input onChange={handlerUpdate} />
  </div>
);

Widget.propTypes = {
  handlerUpdate: React.PropTypes.func.isRequired,
  children: React.PropTypes.node.isRequired
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
  target: React.PropTypes.string.isRequired
};

export default App;