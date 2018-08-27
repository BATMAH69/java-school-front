/** Created by batmah on 19.10.16 */
import React, { Component } from 'react';
import axios from 'axios';

import Users from './Users';
import User from './User';

// import './style.css'

const styles = {
  loading: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  },
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
    axios.get('https://jsonplaceholder.typicode.com/users')
      // в случае успеха меняем состояние приложения
      .then((response) => this.setState({ users: response.data }))
      // в случае ошибки пишем информацию в консоль
      .catch((errror) => console.error(errror))
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
      return (
        <div style={styles.loading}>
          <span>Loading...</span>
        </div>
      )
    }

    if (!this.state.userId) {
      // если есть данные, но пользователь не выбран
      return (
        <div style={styles.layout}>
          <Users users={this.state.users} selectUser={this.selectUser}/>
        </div>
      )
    }

    // если есть данные, и выбран конкретный пользователь

    // достаем пользователя по id
    const user = this.state.users.find(user => user.id === this.state.userId);

    return (
      <div style={styles.layout}>
        <User user={user} selectUser={this.selectUser} changeInfo={this.changeInfo}/>
      </div>
    )

  }
}

export default App;