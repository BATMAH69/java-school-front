import React, { Component, useContext } from 'react';
import ReactDOM from 'react-dom';
import { string, func } from 'prop-types'

const ThemeContext = React.createContext('light');

const Widget = (props) => {
  const theme =useContext(ThemeContext);
  return (
    <div style={{backgroundColor: theme === 'light' ? 'whitesmoke' : props.background}}>
      <div>
        <div>Hi {props.target} {props.message}</div>
        <input onChange={props.handlerUpdate} />
      </div>
    </div>
  );
};

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