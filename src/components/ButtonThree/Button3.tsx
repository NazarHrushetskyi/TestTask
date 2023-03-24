import React, {FC, useEffect} from 'react';
import {TouchableOpacity, Text} from 'react-native';

import Animated, {
  FlipInXDown,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import {useAppDispatch, useAppSelector} from '../../hooks/reduxHooks';
import {RootState} from '../../redux/store';
import {SetButtonColor} from '../../redux/actions/ScreenOneAction';

import styles from './style';

const Button3: FC = () => {
  const dispatch = useAppDispatch();

  const {buttons} = useAppSelector(
    (state: RootState) => state.ScreenOneReducer,
  );

  const offset = useSharedValue('#D199E7');

  const rStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: offset.value,
    };
  });

  useEffect(() => {
    offset.value = withTiming(buttons[2].currentColor, {duration: 500});
  }, [buttons[2].currentColor]);

  return (
    <Animated.View entering={FlipInXDown.duration(3000)}>
      <TouchableOpacity onPress={() => dispatch(SetButtonColor(2))}>
        <Animated.View style={[styles.btn, rStyle]}>
          <Text style={styles.title}>{buttons[2].buttonName}</Text>
        </Animated.View>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default Button3;
