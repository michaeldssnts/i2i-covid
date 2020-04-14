import { setIso } from './actions';

export default {
  [setIso]: (state, { payload }) => ({
    ...state,
    selectedIso: payload
  })
};
