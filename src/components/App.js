import React, { Component } from 'react';

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
          <div key={id}>
            <div>
              <div>name:</div>
              <div>{name}</div>
            </div>
            <div>
              <div>www:</div>
              <div>{website}</div>
            </div>
          </div>
        ))}
      </div>
    )
  }
}

export default App;