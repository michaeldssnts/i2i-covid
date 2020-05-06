import { connect } from 'react-redux';
import Pages from './component';

const mapStateToProps = ({ location }) => ({
  location,
});

export default connect(mapStateToProps)(Pages);
