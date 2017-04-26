import { RENEW_COUNT0, RENEW_COUNT1 } from './actions';
import {reducerObjective} from '../../helper/redux';

import InputTextReduxReducer from '../../components/InputTextRedux/reducer';
import { SET_COUNT } from '../../components/InputTextRedux/actions'
const initialState = {};

const reducers = {
  [SET_COUNT]: InputTextReduxReducer,
  [RENEW_COUNT0]: (state) => state.set('count0',''),
  [RENEW_COUNT1]: (state) => state.set('count1',''),
};

const replacer = (type) => `${type}`.replace(new RegExp(`^((${SET_COUNT})_.*)`),'$2');

export default reducerObjective(reducers, initialState, replacer);