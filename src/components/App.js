import React, { Component } from 'react';

// import './style.css'

const style = {
  card: {
    display: 'flex'
  },
  icon: {
    marginRight: 10,
    height: 40,
    width: 40,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'gold',
    borderRadius: 20
  },
  column: {
    display: 'flex',
    flexDirection: 'column'
  },
  row: {
    display: 'flex',
    flexDirection: 'row'
  },
  description:{
    width: 50
  }
};


const UsersItem = ({ id, name, website }) => (
  <div style={style.card} key={id}>
    <div style={style.icon}>{name[0]}</div>
    <div style={style.column}>
      <div style={style.row}>
        <div style={style.description}>name:</div>
        <div>{name}</div>
      </div>
      <div style={style.row}>
        <div style={style.description}>www:</div>
        <div>{website}</div>
      </div>
    </div>
  </div>
);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: 0,
      users: null
    };
  }

  componentWillMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({users}))
      .catch(err => alert(`Всё плохо ${err}`))
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

    return (
      <div>
        {this.state.users.map(({id, name, website}) => (
          <UsersItem key={id} name={name} website={website} />
        ))}
      </div>
    )
  }
}

export default App;