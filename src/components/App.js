import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { string, func, node } from 'prop-types'

class Widget extends Component {

  componentDidMount(){
    console.log('componentDidMount')
  }

  componentDidUpdate(){
    console.log('componentDidUpdate')
  }

  componentWillUnmount(){
    console.log('componentDidUnmount')
  }

  render() {
    return (
      <div>
        {this.props.children}
        <input onChange={this.props.handlerUpdate} />
      </div>
    );
  }
}


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
  }

  update(e) {
    this.setState({
      text: e.target.value,
      width: ReactDOM.findDOMNode(this.refs.widget).offsetWidth
    })
  }

  render() {
    if (this.state.text === 'die'){
      return (<div ref="widget">whatever you wish</div>);
    }

    return (
      <div ref="widget">
        <Widget handlerUpdate={this.update} >
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