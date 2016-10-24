/**
 * Created by batmah on 19.10.16.
 */
import React from 'react';
import axios from 'axios';

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
    display: 'flex',
    justifyContent: 'center',
  },
  button:{
    margin: 5
  }
};

const Button = ({onClick, children}) => (
  <button style={style.button} onClick={onClick}>
    {children}
  </button>
);

const UsersInfoRow = ({ description, value, changeInfo }) => (
  <div style={style.row}>
    <div style={style.description}>{description}:</div>
    <input
      value={value}
      onChange={(e) => changeInfo(description, e.target.value)}
    />
  </div>
);

const sendUser = (user) => {
  // отсылаем изменения на сервер
  axios.post('https://jsonplaceholder.typicode.com/posts', {user})
    // при успехе показать всплывающее окно
    .then((responce) => alert(JSON.stringify(responce.data)))
    // при неудаче ошибку в консоль
    .catch((error) => console.error(error))
};

const User = ({ user, changeInfo, selectUser }) => (
  <div style={style.card}>
    <div style={style.icon}>{user.name[0]}</div>
    <div style={style.column}>
      {
        // Выбирает все текстовые поля первого уровня вложености и делает из них редактируемые
        Object.keys(user)
          .filter(key  => typeof user[key] === 'string')
          .map((key) => (
            <UsersInfoRow
              key={key}
              description={key}
              value={user[key]}
              changeInfo={changeInfo}
              selectUser={selectUser}
            />
          ))
      }
    </div>
    <div style={style.buttons}>
      <Button onClick={() => selectUser(user.id - 1)}>{'<-'}</Button>
      <Button onClick={() => selectUser(0)}>Список</Button>
      <Button onClick={() => sendUser(user)}>Отправить</Button>
      <Button onClick={() => selectUser(user.id + 1)}>{'->'}</Button>
    </div>
  </div>
);

export default User;