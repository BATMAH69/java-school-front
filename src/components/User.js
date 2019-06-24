import React from 'react';

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

const UsersInfoRow = ({ description, value }) => (
  <div style={style.row}>
    <div style={style.description}>{description}:</div>
    <input
      value={value}
    />
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
            <UsersInfoRow
              key={key}
              description={key}
              value={user[key]}
            />
          ))
      }
    </div>
    <div style={style.buttons}>
      <button>Назад</button>
      <button>Отправить</button>
    </div>
  </div>
);

export default User;