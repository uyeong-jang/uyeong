import { AnyAction, CombinedState, combineReducers } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import userReducer, { IUserState } from '@slices/userSlice';

export interface IState {
  user: IUserState;
}

const rootReducer = (state: IState, action: AnyAction): CombinedState<IState> => {
  switch (action.type) {
    case HYDRATE:
      return action.payload;
    default: {
      const combinedReducer = combineReducers({
        user: userReducer,
      });
      return combinedReducer(state, action);
    }
  }
};

export default rootReducer;
