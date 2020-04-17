import { connect } from 'react-redux';
import { resetFilters, setFilter } from 'modules/filters/actions';

import Component from './component';

const mapStateToProps = (state) => ({
  filters: state.filters,
});

const mapDispatchToProps = {
  resetFilters,
  setFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
