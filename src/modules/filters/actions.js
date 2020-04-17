import { createAction } from 'redux-actions';

export const setFilter = createAction('filters/SET_FILTER');

export const resetFilters = createAction('filters/RESET_FILTERS');
