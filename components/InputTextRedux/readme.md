```
My template

const prevState = filterNode(${prevState});
  const action = ${action};

const nextState = reducers(prevState, action);
  const state = filterNode(${curState});
  expect(true).toEqual(state.equals(nextState));

import {fromJS} from 'immutable';
import reducers from './reducer';

const filterNode = (state) => fromJS(state.app);

it('reducers', () => {
  ${assertions}
});
```

import {fromJS} from 'immutable';
import reducers from './reducer';

const filterNode = (state) => fromJS(state.app);

it('reducers', () => {
  const prevState = filterNode({app:{}});
  const action = {type:'SET_COUNT_COUNT0',payload:'1',node:'count0'};

  const nextState = reducers(prevState, action);
  const state = filterNode({app:{count0:'1'}});
  expect(true).toEqual(state.equals(nextState));
});