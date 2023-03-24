import React, {FC} from 'react';

import {TouchableOpacity, View, Text} from 'react-native';

import {useAppDispatch, useAppSelector} from '../../hooks/reduxHooks';
import {RootState} from '../../redux/store';

import {SetButtonColor} from '../../redux/actions/ScreenOneAction';

import styles from './style';

const Button1: FC = () => {
  const dispatch = useAppDispatch();
  const {buttons} = useAppSelector(
    (state: RootState) => state.ScreenOneReducer,
  );

  return (
    <TouchableOpacity onPress={() => dispatch(SetButtonColor(0))}>
      <View style={[styles.btn, {backgroundColor: buttons[0].currentColor}]}>
        <Text style={styles.title}>{buttons[0].buttonName}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button1;
