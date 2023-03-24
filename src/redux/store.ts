import {AnyAction, applyMiddleware, createStore} from 'redux';

import thunk, {ThunkAction, ThunkDispatch} from 'redux-thunk';
import RootReducer from './reducers/RootReducer';

export const store = createStore(RootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof RootReducer>;

export type AppDispatch = ThunkDispatch<RootState, undefined, AnyAction>;
export type AppThunk<ReturnType = void | Promise<any>> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  AnyAction
>;
