/**
 * Created by batmah on 16.10.16.
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

let Widget = (props, context) => (
  <div style={{ color: context.color}} >
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

Widget.contextTypes = {
  color: React.PropTypes.string
};


function greenHOC(WrappedComponent) {
  return (props) => (
    <div style={{ backgroundColor: props.background }}>
      <WrappedComponent {...props} />
    </div>
  )
}

Widget = greenHOC(Widget);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      width: 0
    };
    this.update = this.update.bind(this);
  }

  componentWillMount() {
    const root = 'https://jsonplaceholder.typicode.com';
    axios.get(root + '/posts/1').then((response) => {
      this.setState({ text: response.data.title });
    });
  }

  getChildContext() {
    return {color: "white"};
  }

  update(e) {
    console.log();
    this.setState({
      text: e.target.value,
      width: ReactDOM.findDOMNode(this.refs.widget).offsetWidth
    })
  }

  render() {
    if (this.state.text === 'die') {
      return (<div ref="widget">whatever you wish</div>);
    }
    const colors = ['tomato', 'lightgreen', 'deepskyblue'];
    return (
      <div ref="widget">
        {
          colors.map((item) => (
            <Widget
              key={item}
              background={item}
              target={this.props.target}
              message={this.state.text}
              handlerUpdate={this.update}
            />
          ))
        }
        <div>{this.state.width}</div>
      </div>
    );
  }
}

App.propTypes = {
  target: React.PropTypes.string.isRequired
};

App.childContextTypes = {
  color: React.PropTypes.string
};

export default App;