import React, { Component } from 'react';
import Users from './Users';
import User from './User';

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
    this.changeInfo = this.changeInfo.bind(this)
  }

  componentWillMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({users}))
      .catch(err => alert(`Всё плохо ${err}`))
  }

  selectUser(id){
    let userId = id;
    if (userId > this.state.users.length){
      userId = 0;
    }
    this.setState({ userId });
  }

  changeInfo(key, value) {
    const index = this.state.users.findIndex(user => user.id === this.state.userId)
    const users = this.state.users.slice();
    users[index][key] = value;
    this.setState({users});
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
        <Users users={this.state.users} selectUser={this.selectUser}/>
      )
    }

    const user = this.state.users.find(user => user.id === this.state.userId);

    return (
      <User user={user} selectUser={this.selectUser} changeInfo={this.changeInfo}/>
    )
  }
}

export default App;