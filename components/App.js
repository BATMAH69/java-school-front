/**
 * Created by batmah on 16.10.16.
 */
import React from 'react';
import { fromJS, Record } from 'immutable';


const ARecord = Record({b:[1,{c:25},3,4,5], d:6});
const a = new ARecord();

const c = 5;

const e = a.setIn(['d'], c);

// arrow
const App = () => {
  console.log(a);
  console.log(e);
  console.log('e === a', e === a);
  console.log('e.d === a.d',e.d === a.d);

  return <div>ALL IN CONSOLE</div>
};

export default App;