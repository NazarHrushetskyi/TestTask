import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';

import ScreenA from '../screens/ScreenA/ScreenA';
import ScreenB from '../screens/ScreenB/ScreenB';
import TabNavigation from './TabNavigation';

import {DrawerParamList, SCREENS} from '../types/navigation';

const Drawer = createDrawerNavigator<DrawerParamList>();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#EDEDF7',
        },
      }}>
      <Drawer.Screen
        name={SCREENS.SCREENA}
        component={ScreenA}
        options={{
          drawerLabel: 'Screen One',
        }}
      />
      <Drawer.Screen
        name={SCREENS.SCREENB}
        component={ScreenB}
        options={{
          drawerLabel: 'Screen Two',
        }}
      />
      <Drawer.Screen
        name={SCREENS.TABNAV}
        component={TabNavigation}
        options={{
          drawerLabel: 'Tab Navigation',
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
