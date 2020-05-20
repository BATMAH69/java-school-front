export const RENEW_COUNT = 'RENEW_COUNT';

export const SET_COUNT = 'SET_COUNT';

export const setCount = (data, node) => ({ type: SET_COUNT, payload: data, node });

export const renewCount = ({ type: RENEW_COUNT });
