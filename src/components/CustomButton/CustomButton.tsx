import React, {FC} from 'react';

import {
  TouchableOpacity,
  View,
  Text,
  GestureResponderEvent,
} from 'react-native';

import styles from './style';

interface ICustomBtn {
  title: string;
  onClick: (value: GestureResponderEvent) => void;
}
const CustomBtn: FC<ICustomBtn> = ({title, onClick}) => {
  return (
    <TouchableOpacity onPress={onClick}>
      <View style={styles.btn}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CustomBtn;
