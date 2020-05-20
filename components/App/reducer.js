import {
  SET_COUNT,
  RENEW_COUNT
} from './actions';
import {reducerObjective} from '../../helper/redux';

const initialState = {};

const reducers = {
  [SET_COUNT]: (state , action) => Object.assign({}, state, { [action.node]: action.payload }),
  [RENEW_COUNT]: () => initialState
};

export default reducerObjective(reducers, initialState);