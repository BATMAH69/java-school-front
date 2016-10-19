/**
 * Created by batmah on 19.10.16.
 */
import React, { Component } from 'react';
import axios from 'axios';

import Users from './Users';

// import './style.css'

const style = {};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: 0,
      users: null
    };
    this.selectUser = this.selectUser.bind(this)
  }

  componentWillMount() {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((response) => this.setState({ users: response.data }))
      .catch((errror) => console.error(errror))
  }

  selectUser(userId){
    this.setState({userId});
  }

  render() {
    console.log(this.state.users);
    if (!this.state.users) {
      return (
        <div>
          Loading...
        </div>
      )
    }

    return (
      <Users users={this.state.users}/>
    )
  }
}

export default App;