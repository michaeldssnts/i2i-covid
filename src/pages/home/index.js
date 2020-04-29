import { connect } from 'react-redux';

import Component from './component';

const mapStateToProps = (state) => ({
  page: state.page,
  location: state.location,
});

export default connect(mapStateToProps)(Component);
