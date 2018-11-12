/**
 * home adjust
 * @author vvkee
 */
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { selector as rootUISelector } from '../../store/root-ui';
import { toggleSidebar } from '../../store/root-ui/actions';
import Home from './Home';

const selector = createSelector(
  rootUISelector,
  (state) => ({ isSideBarShow: state.isSidebarShow })
);

export default connect(
  selector, {
    toggleSidebar
  }
)(Home);
