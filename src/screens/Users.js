import React from 'react';
import { ScrollView, TouchableOpacity, View, Text, TextInput } from 'react-native'

const style = {
  users:{
    display: 'flex',
    justifyContent: 'center',
  },
  card: {
    margin:10,
    display: 'flex',
    flexDirection: 'row'
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
  <View style={style.row}>
    <View style={style.description}><Text>{description}:</Text></View>
    <View><Text>{value}</Text></View>
  </View>
);

const UsersItem = ({ id, name, website, selectUser }) => (
  <TouchableOpacity onPress={() => selectUser(id)} style={style.card}>
    <View style={style.icon}><Text>{name[0]}</Text></View>
    <View style={style.column}>
      <UsersItemRow description="name" value={name} />
      <UsersItemRow description="www" value={website} />
    </View>
  </TouchableOpacity>
);

const Users = ({ users, selectUser }) => (
  <View style={style.users}>
    <View>
      {users.map(({ id, name, website }) => (
        <UsersItem key={id} id={id} name={name} website={website} selectUser={selectUser}/>
      ))}
    </View>
  </View>
);

export default Users;