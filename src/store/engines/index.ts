/**
 * root-ui store
 * @author vvkee
 */
import reducer, { IState } from './reducer';

export const selector = (state: { rootUI: IState }) => state.rootUI;

export default reducer;
