import {SET_COUNT} from './actions';

const initialState = { count: '26' };

const reducer = {
  [SET_COUNT]: (state, action) => Object.assign({}, state, { count: action.payload }),
};

export default (state = initialState, action) => {
  if (!action.type || !reducer[action.type]){
    return state;
  }
  return reducer[action.type](state, action);
};