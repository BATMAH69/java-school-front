/**
 * Created by batmah on 19.10.16.
 */
import React, { Component } from 'react';
import axios from 'axios';

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
      .then((response) => this.setState({users: response.data}))
      .catch((errror) => console.error(errror))
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