import {
  SET_COUNT
} from './actions';
import {reducerObjective} from '../../helper/redux';

const initialState = {};

const reducers = {
  [SET_COUNT]: (state , action) => state.set(action.node, action.payload),
};
const replacer = (type) => `${type}`.replace(new RegExp(`^((${SET_COUNT})_.*)`),'$2');

export default reducerObjective(reducers, initialState, replacer);