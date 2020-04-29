import { filtersData } from 'components/filters/constants';

const initialState = {};

filtersData.forEach((filter) => {
  initialState[filter.column] = [];
});

export default initialState;
