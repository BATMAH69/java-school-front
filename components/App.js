/**
 * Created by batmah on 23.09.16.
 */
'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';

import Users from './Users';
import User from './User';

// import './style.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: 0,
      users: null
    };
    // фиксируем текущий контекст в this
    this.selectUser = this.selectUser.bind(this)
    this.changeInfo = this.changeInfo.bind(this)
  }

  componentWillMount() {
    //e178d1d9.ngrok.io
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {alert(response.json);return response.json()})
      .then(json => {alert(JSON.stringify(json));this.setState({ users: json })})
      .catch((err) => alert('service jsonplaceholder.typicode.com not work'))
  }

  selectUser(id){
    let userId = id;
    if (userId > this.state.users.length){
      // защита от выход за пределы массива
      userId = 0;
    }
    // присваеваем идентификатор текущего пользователя
    this.setState({userId});
  }

  changeInfo(key, value) {
    // находим нужного пользователя
    const index = this.state.users.findIndex(user => user.id === this.state.userId)
    // клонируем массив
    const users = this.state.users.slice();
    // меняем параметры в новой копии в стиле ES6
    users[index][key] = value;
    // присваеваем новый массив с измененными данными
    this.setState({users});
  }

  render() {
    console.log(this.state.users);
    if (!this.state.users) {
      // если нет данных о пользователях
      return (
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
          <Text> Loading...</Text>
        </View>
      )
    }

    if (!this.state.userId) {
      // если есть данные, но пользователь не выбран
      return (
        <ScrollView>
          <Users users={this.state.users} selectUser={this.selectUser} />
          <Users users={this.state.users} selectUser={this.selectUser} />
        </ScrollView>
      )
    }

    // если есть данные, и выбран конкретный пользователь

    // достаем пользователя по id
    const user = this.state.users.find(user => user.id === this.state.userId);

    return (
      <ScrollView>
        <User user={user} selectUser={this.selectUser} changeInfo={this.changeInfo} />
      </ScrollView>
    )

  }
}

export default App;