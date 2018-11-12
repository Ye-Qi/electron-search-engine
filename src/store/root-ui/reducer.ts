/**
 * root-ui reducer
 * @author vvkee
 */
import { handleActions } from 'redux-actions';
import { toggleSidebar } from './actions';

export interface IState {
  isSidebarShow: boolean;
}

const initialState: IState = {
  isSidebarShow: false
};

export default handleActions({
  [toggleSidebar.toString()]: (state) => {
    state.isSidebarShow = !state.isSidebarShow;
    return state;
  }
}, initialState);
