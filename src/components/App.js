import React, { useEffect, useState } from 'react';
import Users from './Users';
import User from './User';

// import './style.css'

const style = {};

const App  = () => {
  const [users, setUsers] = useState(null);
  const [userId, setUserId] = useState(0);


  const selectUser = (id) => {
    setUserId((userId > users.length) ? 0 : id);
  };

  const changeInfo = (key, value) => {
    const index = users.findIndex(user => user.id === userId);
    const usersCopy = users.slice();
    usersCopy[index][key] = value;
    setUsers(usersCopy);
  };

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => setUsers(users))
      .catch(err => alert(`Всё плохо ${err}`))
  }, []);


  if (!users){
    return (
      <div>
        Loading...
      </div>
    )
  }

  if (!userId) {
    return (
      <Users users={users} selectUser={selectUser}/>
    )
  }

  const user = users.find(user => user.id === userId);

  return (
    <User user={user} selectUser={selectUser} changeInfo={changeInfo}/>
  )
};


export default App;