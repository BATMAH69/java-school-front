/** Created by batmah on 19.10.16 */
import React, { Component } from 'react';
import axios from 'axios';

import Users from './Users';
import User from './User';
import * as style from './style.css';

// import './style.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: null
    };
    // фиксируем текущий контекст в this
    this.changeInfo = this.changeInfo.bind(this);
  }

  componentWillMount() {
    // получаем данные при загрузке
    axios.get('https://jsonplaceholder.typicode.com/users')
      // в случае успеха меняем состояние приложения
      .then((response) => this.setState({ users: response.data }))
      // в случае ошибки пишем информацию в консоль
      .catch((errror) => console.error(errror))
  }

  changeInfo(key, value) {
    // находим нужного пользователя
    const index = this.state.users.findIndex(user => user.id === this.props.match.params.id)
    // клонируем массив
    const users = this.state.users.slice();
    // меняем параметры в новой копии в стиле ES6
    users[index] = Object.assign({},users[index],{[key]: value});
    // присваеваем новый массив с измененными данными
    this.setState({users});
  }

  render() {

    console.log(style);

    const id = Number(this.props.match.params.id) || 0;

    if (!this.state.users) {
      // если нет данных о пользователях
      return (
        <div>
          Loading...
        </div>
      )
    }

    if (!id || id > this.state.users.length) {
      // если есть данные, но пользователь не выбран
      return (<div className={style.red}>
          <Users users={this.state.users} selectUser={this.selectUser}/>
        </div>
      )
    }

    // если есть данные, и выбран конкретный пользователь

    // достаем пользователя по id
    const user = this.state.users.find(user => user.id === id);

    return (
      <User user={user} selectUser={this.selectUser} changeInfo={this.changeInfo}/>
    )

  }
}

export default App;