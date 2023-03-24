import {ScreenOne} from '../actions/actionTypes';

interface IInitialState {
  baseColors: Array<string>;
  buttons: Array<{
    currentColor: string;
    buttonName: string;
  }>;
}
const InitialState: IInitialState = {
  baseColors: ['#D199E7', '#72C1ED', '#A196F1', '#7D72ED'],
  buttons: [
    {
      currentColor: '#D199E7',
      buttonName: 'Button One',
    },
    {
      currentColor: '#72C1ED',
      buttonName: 'Button Two',
    },
    {
      currentColor: '#A196F1',
      buttonName: 'Button Three',
    },
  ],
};

export interface IScreenOneColor {
  type: ScreenOne.SETCOLOR;
  payload: number;
}

const ScreenOneReducer = (
  state = InitialState,
  action: IScreenOneColor,
): IInitialState => {
  switch (action.type) {
    case ScreenOne.SETCOLOR:
      const currentButton = [...state.buttons][action.payload];

      const currentIndexColor = state.baseColors.findIndex(
        i => i === currentButton.currentColor,
      );

      const nextIndexColor =
        currentIndexColor === state.baseColors.length - 1
          ? 0
          : currentIndexColor + 1;

      const nextColor = state.baseColors[nextIndexColor];

      const newStateButtons = [...state.buttons];

      newStateButtons.splice(action.payload, 1, {
        currentColor: nextColor,
        buttonName: state.buttons[action.payload].buttonName,
      });
      return {...state, buttons: newStateButtons};

    default:
      return state;
  }
};

export default ScreenOneReducer;
