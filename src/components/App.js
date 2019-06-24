import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { string, func } from 'prop-types'

const ThemeContext = React.createContext('light');

class Widget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: props.message
    }
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

function greenHOC(WrappedComponent) {
  return (props) => (
    <ThemeContext.Consumer>
      {theme => (
        <div style={{backgroundColor: theme === 'light'?'whitesmoke':props.background}}>
          <WrappedComponent {...props}/>
        </div>
      )}
    </ThemeContext.Consumer>
  )
}

Widget = greenHOC(Widget);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      width: 0,
      theme: 'light',
    };
    this.update = this.update.bind(this);
    this.widgetRef = React.createRef();
  }

  shouldComponentUpdate(nextProps, nextState){
    return nextState.text !== '777';
  }

  componentDidMount() {
    const root = 'https://jsonplaceholder.typicode.com';
    fetch(root + '/posts/1')
      .then(response => response.json())
      .then(response => this.setState({ text: response.title }));
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
    const colors = ['tomato','lightgreen','deepskyblue'];

    return (
      <ThemeContext.Provider value={this.state.theme}>
        <div ref={this.widgetRef}>
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
        </div>
      </ThemeContext.Provider>
    );
  }
}

App.propTypes = {
  target: string.isRequired
};

export default App;