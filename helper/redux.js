/**
 * Created by batmah on 18.04.17.
 */
import { fromJS } from 'immutable';
const xxx = x => x;

export const reducerObjective = (reducers, initialState, replacer=xxx) => (state = initialState, action) => {
  const immutableState = fromJS(state);
  const type = replacer(action.type);
  if (!reducers[type]){
    return immutableState;
  }
  return reducers[type](immutableState, action);
};