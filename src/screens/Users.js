/**
 * Created by batmah on 19.10.16.
 */
import React from 'react';

const style = {
  users:{
    display: 'flex',
    justifyContent: 'center',
    alignItems:'center',
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
  <div style={style.row}>
    <div style={style.description}><span>{description}:</span></div>
    <div><span>{value}</span></div>
  </div>
);

const UsersItem = ({ id, name, website, selectUser }) => (
  <div onClick={() => selectUser(id)} style={style.card}>
    <div style={style.icon}><span>{name[0]}</span></div>
    <div style={style.column}>
      <UsersItemRow description="name" value={name} />
      <UsersItemRow description="www" value={website} />
    </div>
  </div>
);

const Users = ({ users, selectUser }) => (
  <div style={style.users}>
    <div>
      {users.map(({ id, name, website }) => (
        <UsersItem key={id} id={id} name={name} website={website} selectUser={selectUser}/>
      ))}
    </div>
  </div>
);

export default Users;