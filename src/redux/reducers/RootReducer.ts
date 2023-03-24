import {combineReducers} from 'redux';
import {TypedUseSelectorHook, useSelector} from 'react-redux';

import ScreenTwoReducer from './ScreenTwoReducer';
import ScreenOneReducer from './ScreenOneReducer';

const RootReducer = combineReducers({
  ScreenOneReducer,
  ScreenTwoReducer,
});

export type RootState = ReturnType<typeof RootReducer>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default RootReducer;
