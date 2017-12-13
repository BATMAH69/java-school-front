/**
 * Created by batmah on 19.10.16.
 */
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput
} from 'react-native';

const style = StyleSheet.create({
  users:{
    justifyContent: 'center',
    alignItems:'center',
  },
  card: {
    margin:10,
    flexDirection: 'row',
  },
  icon: {
    marginRight: 10,
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'gold',
    borderRadius: 20
  },
  column: {
    flexDirection: 'column'
  },
  row: {
    flexDirection: 'row'
  },
  description: {
    width: 50
  }
});

const UsersItemRow = ({ description, value }) => (
  <View style={style.row}>
    <View style={style.description}><Text>{description}:</Text></View>
    <View><Text>{value}</Text></View>
  </View>
);

const UsersItem = ({ id, name, website, selectUser }) => (
  <TouchableOpacity onPress={() => selectUser(id)}>
    <View style={style.card}>
      <View style={style.icon}><Text>{name[0]}</Text></View>
      <View style={style.column}>
        <UsersItemRow description="name" value={name} />
        <UsersItemRow description="www" value={website} />
      </View>
    </View>
  </TouchableOpacity>
);

const Users = ({ users, selectUser }) => (
  <View style={style.users}>
    <View>
      {users.map(({ id, name, website }) => (
        <UsersItem key={id} id={id} name={name} website={website} selectUser={selectUser} />
      ))}
    </View>
  </View>
);

export default Users;