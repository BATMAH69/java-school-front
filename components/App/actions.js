export const RENEW_COUNT0 = 'RENEW_COUNT0';
export const RENEW_COUNT1 = 'RENEW_COUNT1';

export const renewCount0 = ({ type: RENEW_COUNT0 });
export const renewCount1 = ({ type: RENEW_COUNT1 });
export const renewCounts = () => (dispatch) => {
  dispatch(renewCount0);
  dispatch(renewCount1);
};
