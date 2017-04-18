import { RENEW_COUNT } from './actions';
import {reducerObjective} from '../../helper/redux';

import InputTextReduxReducer from '../InputTextRedux/reducer';
import {SET_COUNT} from '../InputTextRedux/actions'
const initialState = {};

const reducers = {
  [SET_COUNT]: InputTextReduxReducer,
  [RENEW_COUNT]: () => initialState
};

export default reducerObjective(reducers, initialState);