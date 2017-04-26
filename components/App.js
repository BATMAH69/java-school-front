/**
 * Created by batmah on 16.10.16.
 */
import React from 'react';
import { fromJS } from 'immutable';

const a = {b:[1,{c:25},3,4,5], d:6};

const c = 24;

const e = a;

e.b[1].c = c;

// arrow
const App = () => {
  console.log(a);
  console.log(e);
  console.log(e === a);
  return <div>ALL IN CONSOLE</div>
};

export default App;