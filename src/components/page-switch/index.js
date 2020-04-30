import { connect } from 'react-redux';

import Component from './component';

const mapStateToProps = (state) => ({
  page: state.page,
});

export default connect(mapStateToProps)(Component);
