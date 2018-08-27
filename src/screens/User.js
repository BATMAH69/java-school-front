/**
 * Created by batmah on 19.10.16.
 */
import React from 'react';

const style = {
  card: {
    display: 'flex',
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
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
    borderRadius: 100 / 2,
  },
  iconText: {
    fontSize: 48
  },
  column: {
    display: 'flex',
    flexDirection: 'column'
  },
  row: {
    margin: 5,
    display: 'flex',
    alignItems: 'center',
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
    flexDirection: 'row',
  },
  button:{
    margin: 10
  }
};

const Button = ({onClick, children}) => (
  <div>
    <div onClick={onClick}>
      <span style={style.button}>{ children }</span>
    </div>
  </div>
);

const UsersInfoRow = ({ description, value, changeInfo }) => (
  <div style={style.row}>
    <div style={style.description}><span>{description}:</span></div>
    <input
      value={value}
      onChange={(e) => changeInfo(description, e.target.value)}
    />
  </div>
);

const sendUser = (user) => {
  // отсылаем изменения на сервер
  fetch('https://jsonplaceholder.typicode.com/posts',{ method: "POST",})
    .then(responce => responce.json())
    // при успехе показать всплывающее окно
    .then(json => alert(JSON.stringify(json)))
    // при неудаче ошибку в консоль
    .catch((err) => alert('service jsonplaceholder.typicode.com not work'))
};

const User = ({ user, changeInfo, selectUser }) => (
  <div style={style.card}>
    <div style={style.icon}><span style={style.iconText}>{user.name[0]}</span></div>
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
      <Button onClick={() => selectUser(user.id - 1)}>{'←'}</Button>
      <Button onClick={() => selectUser(0)}>Список</Button>
      <Button onClick={() => sendUser(user)}>Отправить</Button>
      <Button onClick={() => selectUser(user.id + 1)}>{'→'}</Button>
    </div>
  </div>
);

export default User;