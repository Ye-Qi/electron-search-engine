/**
 * createStore
 * @author vvkee
 */
import { applyMiddleware, createStore, Reducer } from 'redux';
import logger from 'redux-logger';

export default (reducer: Reducer) => createStore(
  reducer,
  applyMiddleware(logger)
);
