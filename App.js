import React, { Component } from 'react';
import { ScrollView, SafeAreaView } from 'react-native'

import Users from './src/screens/Users';
import User from './src/screens/User';
import Loader from "./src/screens/Loader";

const style ={
  layout:{
    padding:10,
    paddingTop:40,
  }
};

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
    if (!this.state.users){
      return (
        <Loader />
      )
    }

    if (!this.state.userId) {
      return (
        <ScrollView style={style.layout}>
          <Users users={this.state.users} selectUser={this.selectUser}/>
          <Users users={this.state.users} selectUser={this.selectUser}/>
        </ScrollView>
      )
    }

    const user = this.state.users.find(user => user.id === this.state.userId);

    return (
      <ScrollView style={style.layout}>
        <User user={user} selectUser={this.selectUser} changeInfo={this.changeInfo}/>
      </ScrollView>
    )
  }
}

export default App;