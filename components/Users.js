/**
 * Created by batmah on 19.10.16.
 */
import React from 'react';

const style = {
  users:{
    display: 'flex',
    justifyContent: 'center',
  },
  card: {
    margin:10,
    display: 'flex'
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
    <div style={style.description}>{description}:</div>
    <div>{value}</div>
  </div>
);

const UsersItem = ({ id, name, website, selectUser }) => (
  <div style={style.card} onClick={() => selectUser(id)}>
    <div style={style.icon}>{name[0]}</div>
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