/**
 * Created by batmah on 19.10.16.
 */
import React, { Component } from 'react';
import axios from 'axios';

// import './style.css'

const style = {
  card: {
    margin:10,
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
  description: {
    width: 50,
    color: 'gray'
  }
};


const UsersItemRow = ({ description, value }) => (
  <div style={style.row}>
    <div style={style.description}>{description}:</div>
    <div>{value}</div>
  </div>
);

const UsersItem = ({ name, website }) => (
  <div style={style.card}>
    <div style={style.icon}>{name[0]}</div>
    <div style={style.column}>
      <UsersItemRow description="name" value={name} />
      <UsersItemRow description="www" value={website} />
    </div>
  </div>
);

const Users = ({ users }) => (
  <div>
    {users.map(({ id, name, website }) => (
      <UsersItem key={id} name={name} website={website} />
    ))}
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
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((response) => this.setState({ users: response.data }))
      .catch((errror) => console.error(errror))
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