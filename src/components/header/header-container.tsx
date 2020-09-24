import { connect } from 'react-redux';
import IReducedState from '../../storage/IReducedState';
import Header from './header';
import actions from './actions';

const mapStateToProps = (state: IReducedState) => state;
export default connect(mapStateToProps, actions)(Header);