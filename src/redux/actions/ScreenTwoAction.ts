import {Dispatch} from 'redux';
import {store} from '../store';

import {ScreenTwo} from './actionTypes';
import {IUserId} from '../reducers/ScreenTwoReducer';

export const setUserId = (payload: number): IUserId => ({
  type: ScreenTwo.USERID,
  payload,
});

export const fetchData = (refresh = false) => {
  return async (dispatch: Dispatch) => {
    !!refresh && dispatch({type: ScreenTwo.SETREFRESH, payload: true});
    const {userId} = store.getState().ScreenTwoReducer;

    try {
      const json = await fetch(
        `https://jsonplaceholder.typicode.com/posts/?userId=${userId}`,
      );
      const response = await json.json();

      dispatch({
        type: ScreenTwo.FETCH_DATA,
        payload: response,
      });

      dispatch({type: ScreenTwo.SETREFRESH, payload: false});
    } catch (error) {
      console.error(error);

      dispatch({type: ScreenTwo.SETREFRESH, payload: false});
    }
  };
};
