/**
 * Created by batmah on 16.10.16.
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Widget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: props.message
    }
  }


  componentWillMount() {
    console.log('componentWillMount')
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

  componentWillReceiveProps(nextProps) {
    if (+nextProps.message < +this.state.message) {
      return;
    }
    this.setState({ message: nextProps.message });
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

  shouldComponentUpdate(nextProps, nextState){
    return nextState.text !== this.state.text;
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

    return (
      <div ref="widget">
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