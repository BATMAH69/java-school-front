import {
  SET_COUNT0,
  SET_COUNT1,
  SET_COUNT2,
  SET_COUNT3,
  SET_COUNT4,
  SET_COUNT5,
  SET_COUNT6,
  SET_COUNT7,
  SET_COUNT8,
  SET_COUNT9,
  RENEW_COUNT
} from './actions';
import {reducerObjective} from '../../helper/redux';

const initialState = {};

const reducers = {
  [SET_COUNT0]: (state, action) => Object.assign({}, state, { count0: action.payload }),
  [SET_COUNT1]: (state, action) => Object.assign({}, state, { count1: action.payload }),
  [SET_COUNT2]: (state, action) => Object.assign({}, state, { count2: action.payload }),
  [SET_COUNT3]: (state, action) => Object.assign({}, state, { count3: action.payload }),
  [SET_COUNT4]: (state, action) => Object.assign({}, state, { count4: action.payload }),
  [SET_COUNT5]: (state, action) => Object.assign({}, state, { count5: action.payload }),
  [SET_COUNT6]: (state, action) => Object.assign({}, state, { count6: action.payload }),
  [SET_COUNT7]: (state, action) => Object.assign({}, state, { count7: action.payload }),
  [SET_COUNT8]: (state, action) => Object.assign({}, state, { count8: action.payload }),
  [SET_COUNT9]: (state, action) => Object.assign({}, state, { count9: action.payload }),
  [RENEW_COUNT]: () => initialState
};

export default reducerObjective(reducers, initialState);