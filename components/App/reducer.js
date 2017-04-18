import { RENEW_COUNT0, RENEW_COUNT1 } from './actions';
import {reducerObjective} from '../../helper/redux';

import InputTextReduxReducer from '../InputTextRedux/reducer';
import {SET_COUNT} from '../InputTextRedux/actions'
const initialState = {};

const reducers = {
  [SET_COUNT]: InputTextReduxReducer,
  [RENEW_COUNT0]: (state) => Object.assign({}, state, { count0: '' }),
  [RENEW_COUNT1]: (state) => Object.assign({}, state, { count1: '' }),
};

export default reducerObjective(reducers, initialState);