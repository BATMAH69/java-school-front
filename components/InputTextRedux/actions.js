export const SET_COUNT = 'SET_COUNT';

export const setCount = (data, node) => ({ type: `${SET_COUNT}_${node.toUpperCase()}`, payload: data, node });
