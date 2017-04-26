/**
 * Created by batmah on 16.10.16.
 */
import React from 'react';
import { fromJS } from 'immutable';

const a = fromJS({b:[1,{c:25, f:24, g: 26},3,4,5], d:6});

const c = 24;

const b1 = {
  c:c,
  f:c,
  g:126
};

const e = a.mergeDeepIn(['b',1], b1);

// arrow
const App = () => {
  console.log(a);
  console.log(e);
  console.log('e === a', e === a);
  console.log('e.d === a.d',e.get('d') === a.get('d'));
  console.log('e.d === a.d',e.get('b') === a.get('b'));
  console.log('e.b[0] === a.b[0]',e.getIn(['b',0]) === a.getIn(['b',0]));
  console.log('e.b[1] === a.b[1]',e.getIn(['b',1]) === a.getIn(['b',1]));
  console.log('e.b[1].c === a.b[1].c',e.getIn(['b',1,'c']) === a.getIn(['b',1,'c']));
  console.log('e.b[1].c, a.b[1].c',e.getIn(['b',1,'c']), a.getIn(['b',1,'c']));

  return <div>ALL IN CONSOLE</div>
};

export default App;