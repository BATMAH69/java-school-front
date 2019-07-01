import React from 'react';
import { ScrollView, TouchableOpacity, View, Text, TextInput } from 'react-native'

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
    borderRadius: 50,
    fontSize: 48
  },
  iconText: {
    fontSize: 48
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  row: {
    margin: 5,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  description: {
    width: 70,
  },
  descriptionText: {
    marginTop: 5,
    color: 'gray'
  },
  buttons:{
    margin: 5,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  button:{
    margin: 5
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
    <View style={style.description}>
      <Text style={style.descriptionText}>{description}:</Text>
    </View>
    <TextInput
      value={value}
      onChangeText={text => changeInfo(description, text)}
    />
  </View>
);

const sendUser = (user) => {
  const options = {method:'post', body: JSON.stringify(user)};
  fetch('https://jsonplaceholder.typicode.com/posts', options)
    .then(response => response.json())
    .then(response => alert(JSON.stringify(response)))
    .catch((err) => console.error(err))
};


const User = ({ user, changeInfo, selectUser }) => (
  <View style={style.card}>
    <View style={style.icon}>
      <Text style={style.iconText}>{user.name[0]}</Text>
    </View>
    <View style={style.column}>
      {
        Object.keys(user)
          .filter(key => typeof user[key] === 'string')
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
      <Button onClick={() => selectUser(user.id - 1)}>{'<-'}</Button>
      <Button onClick={() => selectUser(0)}>Список</Button>
      <Button onClick={() => sendUser(user)}>Отправить</Button>
      <Button onClick={() => selectUser(user.id + 1)}>{'->'}</Button>
    </View>
  </View>
);

export default User;