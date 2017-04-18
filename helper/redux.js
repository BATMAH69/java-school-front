/**
 * Created by batmah on 18.04.17.
 */

export const reducerObjective = (reducers, initialState) => (state = initialState, action) => {
  if (!reducers[action.type]){
    return state;
  }
  return reducers[action.type](state, action);
};