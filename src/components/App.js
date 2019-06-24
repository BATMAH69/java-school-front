import React, { Component } from 'react';
import Users from './Users';
import User from './User';

// import './style.css'

const style = {};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: 1,
      users: null
    };
  }

  componentWillMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({users}))
      .catch(err => alert(`Всё плохо ${err}`))
  }
  
  selectUser(userId){
    this.setState({userId});
  }

  render() {
    console.log(this.state.users);
    if (!this.state.users){
      return (
        <div>
          Loading...
        </div>
      )
    }

    if (!this.state.userId) {
      return (
        <Users users={this.state.users}/>
      )
    }

    const user = this.state.users.find(user => user.id === this.state.userId);

    return (
      <User user={user}/>
    )
  }
}

export default App;