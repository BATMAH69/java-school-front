import {SET_COUNT, RENEW_COUNT} from './actions';

const initialState = { count: '26' };

const reducer = {
  [SET_COUNT]: (state, action) => Object.assign({}, state, { count: action.payload }),
  [RENEW_COUNT]: () => initialState
};

export default (state = initialState, action) => {
  if (!action.type || !reducer[action.type]){
    return state;
  }
  return reducer[action.type](state, action);
};