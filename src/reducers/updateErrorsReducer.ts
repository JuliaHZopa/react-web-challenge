import { IInitialState } from "../initialState";
import {handleActions} from 'redux-actions';

const updateErrors = (state: IInitialState, action: any) => {
  return {
    ...state,
    ...action.errors
  }
}

export default handleActions<any, IInitialState>({
  ['UPDATE_ERRORS']: updateErrors,
}, {});
