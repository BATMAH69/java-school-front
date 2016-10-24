/**
 * Created by batmah on 16.10.16.
 */
import React from 'react';
import { Link } from 'react-router'
// arrow
const App = ({children}) => (
  <div>
    <Link style={{margin:20}} to="/about">about</Link>
    <Link style={{margin:20}} to="/user/10">user</Link>
    <div style={{backgroundColor: 'tomato'}}>Общая часть</div>
    <div style={{backgroundColor: 'gold'}}>{children}</div>
  </div>
);

export default App;