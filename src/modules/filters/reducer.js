import { handleActions } from 'redux-actions';
import { setFilter, resetFilters } from './actions';
import initialState from './initial-state';

const reducer = handleActions(
  {
    [setFilter]: (state, { payload }) => ({
      ...state,
      ...payload,
    }),
    [resetFilters]: () => initialState,
  },
  initialState
);

export default reducer;
