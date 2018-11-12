/**
 * actions
 * @author vvkee
 */
import { createActions } from 'redux-actions';

const { toggleSidebar } = createActions({
  TOGGLE_SIDEBAR: () => ({})
});

export { toggleSidebar };
