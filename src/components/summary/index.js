import { connect } from 'react-redux';

import Component from './component';

const mapStateToProps = (state) => ({
  iso: state.location.payload.iso,
  page: state.page,
  location: state.location.pathname,
});

export default connect(mapStateToProps)(Component);
