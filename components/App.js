/**
 * Created by batmah on 19.10.16.
 */
import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: 0,
      users: null
    };
  }

  componentWillMount() {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((response) => this.setState({users: response.data}))
      .catch((errror) => alert('Всё плохо'))
  }

  render() {
    console.log(this.state.users);
    return (
      <div>
        Loading...
      </div>
    )
  }
}

export default App;