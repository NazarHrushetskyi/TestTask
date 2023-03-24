import {ScreenOne} from './actionTypes';
import {IScreenOneColor} from '../reducers/ScreenOneReducer';

export const SetButtonColor = (payload: number): IScreenOneColor => {
  return {
    type: ScreenOne.SETCOLOR,
    payload,
  };
};
