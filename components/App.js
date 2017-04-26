/**
 * Created by batmah on 16.10.16.
 */
import React from 'react';
import { fromJS } from 'immutable';

const a = fromJS({b:[1,{c:25},3,4,5], d:6});

const c = 24;

// const e = a;
//
// e.b[1].c = c;

const e = a.setIn(['b',1,'c'], c);

// const b1 = (a.b[1].c === c)? a.b[1] : Object.assign({}, a.b[1], { c });
//
// let b = a.b;
// if (a.b[1] !== b1){
//   b = a.b.slice();
//   b.splice(1,1,b1);
// }
// const e = (a.b === b)? a : Object.assign({}, a, { b });

// arrow
const App = () => {
  console.log(a);
  console.log(e);
  console.log('e === a', e === a);
  // console.log('e.d === a.d',e.d === a.d);
  // console.log('e.b === a.b',e.b === a.b);
  // console.log('e.b[0] === a.b[0]',e.b[0] === a.b[0]);
  // console.log('e.b[1] === a.b[1]',e.b[1] === a.b[1]);
  // console.log('e.b[1].z === a.b[1].z',e.b[1].c === a.b[1].c);

  return <div>ALL IN CONSOLE</div>
};

export default App;