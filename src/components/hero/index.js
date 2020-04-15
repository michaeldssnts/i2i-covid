import { connect } from 'react-redux';
import Component from './component';

const mapStateToProps = (state) => ({
  iso: state.location.payload.iso,
});

export default connect(mapStateToProps)(Component);
