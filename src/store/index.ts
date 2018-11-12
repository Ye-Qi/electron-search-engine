/**
 * store
 * @author vvkee
 */
import { combineReducers } from 'redux';
import createStore from './createStore';
import rootUI from './root-ui';

export default createStore(combineReducers({
  rootUI
}));
