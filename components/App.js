/**
 * Created by batmah on 19.10.16.
 */
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    console.log(this.state.users);
    return (
      <div>
        Loading...
      </div>
    )
  }
}

export default App;