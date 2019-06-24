import React, { Component } from 'react';
import Users from './Users';

// import './style.css'

const style = {
  card: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
  },
  icon: {
    margin: 5,
    height: 100,
    width: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'gold',
    borderRadius: '50%',
    fontSize: 48
  },
  column: {
    display: 'flex',
    flexDirection: 'column'
  },
  row: {
    margin: 5,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  description: {
    width: 70,
    color: 'gray'
  },
  buttons:{
    margin: 5,
    display: 'flex',
    justifyContent: 'center',
  }
};

const UsersItemRow = ({ description, value }) => (
  <div style={style.row}>
    <div style={style.description}>{description}:</div>
    <input value={value} />
  </div>
);

const User = ({ user }) => (
  <div style={style.card}>
    <div style={style.icon}>{user.name[0]}</div>
    <div style={style.column}>
      {
        Object.keys(user)
          .filter(key => typeof user[key] === 'string')
          .map((key) => (
            <UsersItemRow key={key} description={key} value={user[key]} />
          ))
      }
    </div>
    <div style={style.buttons}>
      <button>Назад</button>
      <button>Отправить</button>
    </div>
  </div>
);

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

    if (!this.state.users) {
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