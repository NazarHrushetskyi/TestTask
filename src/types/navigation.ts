import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {FC} from 'react';

export enum SCREENS {
  SCREENA = 'ScreenA',
  SCREENB = 'ScreenB',
  TABNAV = 'TabNavigation',
  DRAWERNAV = 'DrawerNavigation',
}

export type DrawerParamList = {
  [SCREENS.SCREENA]: undefined;
  [SCREENS.SCREENB]: undefined;
  [SCREENS.TABNAV]: undefined;
};

export type BottomTabParamList = {
  [SCREENS.SCREENA]: undefined;
  [SCREENS.SCREENB]: undefined;
};
export type StackParamList = {
  [SCREENS.DRAWERNAV]: undefined;
};

export type RootBottomScreenProps<T extends keyof BottomTabParamList> = FC<
  BottomTabScreenProps<BottomTabParamList, T>
>;
