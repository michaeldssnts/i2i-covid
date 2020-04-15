import { handleActions } from 'redux-actions';
import { setIso } from './actions';
import initialState from './initial-state';

const reducer = handleActions(
  {
    [setIso]: (state, { payload }) => ({
      ...state,
      selectedIso: payload,
    }),
  },
  initialState
);

export default reducer;
