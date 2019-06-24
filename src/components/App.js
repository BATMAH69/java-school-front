import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { string, func, node } from 'prop-types'

class Widget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: props.message
    }
  }

  componentDidMount() {
    console.log('componentDidMount')
  }

  componentDidUpdate() {
    console.log('componentDidUpdate')
  }

  componentWillUnmount() {
    console.log('componentDidUnmount')
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (+nextProps.message < +prevState.message) {
      console.log('getDerivedStateFromProps true');
      return null;
    }
    console.log('getDerivedStateFromProps false');
    return { message: nextProps.message };
  }
  render() {
    return (
      <div>
        <div>Hi {this.props.target} {this.state.message}</div>
        <input onChange={this.props.handlerUpdate} />
      </div>
    );
  }
}


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

  shouldComponentUpdate(nextProps, nextState){
    return nextState.text !== '777';
  }

  update(e) {
    console.log();
    this.setState({
      text: e.target.value,
      width: ReactDOM.findDOMNode(this.widgetRef.current).offsetWidth
    })
  }

  render() {
    if (this.state.text === 'die') {
      return (<div ref="widget">whatever you wish</div>);
    }

    return (
      <div ref={this.widgetRef}>
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