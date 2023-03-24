import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import ScreenA from '../screens/ScreenA/ScreenA';
import ScreenB from '../screens/ScreenB/ScreenB';
import {BottomTabParamList, SCREENS} from '../types/navigation';
import {Image, Platform, View} from 'react-native';

const Tab = createBottomTabNavigator<BottomTabParamList>();

export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: Platform.OS === 'android' ? 70 : 80,
          paddingBottom: Platform.OS === 'android' ? 15 : 23,
        },
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: 'bold',
          color: 'black',
        },
      }}>
      <Tab.Screen
        options={{
          tabBarLabel: 'SCREEN A',
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                source={require('../assets/img/a_icon.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#0e80e6' : 'black',
                }}
              />
            </View>
          ),
        }}
        name={SCREENS.SCREENA}
        component={ScreenA}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'SCREEN B',
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                source={require('../assets/img/b_icon.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#0e80e6' : 'black',
                }}
              />
            </View>
          ),
        }}
        name={SCREENS.SCREENB}
        component={ScreenB}
      />
    </Tab.Navigator>
  );
}
