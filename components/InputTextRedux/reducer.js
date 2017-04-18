import {
  SET_COUNT
} from './actions';
import {reducerObjective} from '../../helper/redux';

const initialState = {
  count: '',
};

const reducers = {
  [SET_COUNT]: (state , action) => Object.assign({}, state, { [action.node]: action.payload }),
};

export default reducerObjective(reducers, initialState);