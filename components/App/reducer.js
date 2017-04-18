import {SET_COUNT, RENEW_COUNT} from './actions';
import {reducerObjective} from '../../helper/redux';

const initialState = { count: '26' };

const reducers = {
  [SET_COUNT]: (state, action) => Object.assign({}, state, { count: action.payload }),
  [RENEW_COUNT]: () => initialState
};

export default reducerObjective(reducers, initialState);