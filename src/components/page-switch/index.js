import { connect } from 'react-redux';

import Component from './component';

const mapStateToProps = (state) => ({
  prev: state.location.prev,
  page: state.page,
});

export default connect(mapStateToProps)(Component);
