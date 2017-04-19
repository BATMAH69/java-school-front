/**
 * Created by batmah on 18.04.17.
 */

const xxx = x => x;

export const reducerObjective = (reducers, initialState, replacer=xxx) => (state = initialState, action) => {
  const type = replacer(action.type);
  if (!reducers[type]){
    return state;
  }
  return reducers[type](state, action);
};