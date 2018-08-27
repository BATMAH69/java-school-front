/** Created by batmah on 19.10.16 */
import React, { Component } from 'react';
import { ScrollView, TouchableOpacity, View, Text, TextInput } from 'react-native'
import Users from './screens/Users';
import User from './screens/User';
import Loader from './components/Loader';

const styles = {
  layout: {},
};

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
    // получаем данные при загрузке
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      // в случае успеха меняем состояние приложения
      .then(json => this.setState({ users: json }))
      // в случае ошибки пишем информацию на экран
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
    users[index] = Object.assign({},users[index],{[key]: value});
    // присваеваем новый массив с измененными данными
    this.setState({users});
  }

  render() {
    console.log(this.state.users);
    if (!this.state.users) {
      // если нет данных о пользователях
      return <Loader />
    }

    if (!this.state.userId) {
      // если есть данные, но пользователь не выбран
      return (
        <ScrollView style={styles.layout}>
          <Users users={this.state.users} selectUser={this.selectUser}/>
        </ScrollView>
      )
    }

    // если есть данные, и выбран конкретный пользователь

    // достаем пользователя по id
    const user = this.state.users.find(user => user.id === this.state.userId);

    return (
      <ScrollView style={styles.layout}>
        <User user={user} selectUser={this.selectUser} changeInfo={this.changeInfo}/>
      </ScrollView>
    )

  }
}

export default App;