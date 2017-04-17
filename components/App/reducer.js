import {SET_COUNT} from './actions';

export default (state = { count: '26' }, action) => {
  if (action.type !== SET_COUNT){
    return state;
  }
  return Object.assign({}, state, { count: action.payload });
};