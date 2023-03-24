import {ScreenTwo} from '../actions/actionTypes';

interface IResponse {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface IInitialState {
  userId: number;
  refresh: boolean;
  response?: Array<IResponse>;
}

const InitialState: IInitialState = {
  userId: 1,
  refresh: false,
  response: undefined,
};

export interface IUserId {
  type: ScreenTwo.USERID;
  payload: number;
}
export interface IRefresh {
  type: ScreenTwo.SETREFRESH;
  payload: boolean;
}
interface IFetchData {
  type: ScreenTwo.FETCH_DATA;
  payload: Array<IResponse>;
}

type Actions = IUserId | IFetchData | IRefresh;

const ScreenTwoReducer = (
  state = InitialState,
  action: Actions,
): IInitialState => {
  switch (action.type) {
    case ScreenTwo.USERID:
      return {...state, userId: action.payload};
    case ScreenTwo.SETREFRESH:
      return {...state, refresh: action.payload};
    case ScreenTwo.FETCH_DATA:
      return {...state, response: action.payload};
    default:
      return state;
  }
};

export default ScreenTwoReducer;
