/**
 * Created by batmah on 19.10.16.
 */
import React from 'react';
import { ScrollView, TouchableOpacity, View, Text, TextInput } from 'react-native'

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
  <View>
    <TouchableOpacity onPress={onClick}>
      <Text style={style.button}>{ children }</Text>
    </TouchableOpacity>
  </View>
);

const UsersInfoRow = ({ description, value, changeInfo }) => (
  <View style={style.row}>
    <View style={style.description}><Text>{description}:</Text></View>
    <TextInput
      value={value}
      onChangeText={(value) => changeInfo(description, value)}
    />
  </View>
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
  <View style={style.card}>
    <View style={style.icon}><Text style={style.iconText}>{user.name[0]}</Text></View>
    <View style={style.column}>
      {
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

    </View>
    <View style={style.buttons}>
      <Button onClick={() => selectUser(user.id - 1)}>{'←'}</Button>
      <Button onClick={() => selectUser(0)}>Список</Button>
      <Button onClick={() => sendUser(user)}>Отправить</Button>
      <Button onClick={() => selectUser(user.id + 1)}>{'→'}</Button>
    </View>
  </View>
);

export default User;