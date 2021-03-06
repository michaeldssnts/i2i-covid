import { connect } from 'react-redux';
import Pages from './component';

const mapStateToProps = ({ location }) => ({
  iso: location.payload.iso,
  widget_slug: location.payload.widget_slug,
});

export default connect(mapStateToProps)(Pages);
