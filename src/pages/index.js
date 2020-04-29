import { connect } from 'react-redux';
import Pages from './component';

const mapStateToProps = ({ page }) => ({ page });

export default connect(mapStateToProps)(Pages);
