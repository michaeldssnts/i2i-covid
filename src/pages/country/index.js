import { connect } from 'react-redux';
import Component from './component';

const mapStateToProps = (state) => ({
  iso: state.country.selectedIso,
});

export default connect(mapStateToProps)(Component);
