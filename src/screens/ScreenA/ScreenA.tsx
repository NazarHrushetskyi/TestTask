import React from 'react';
import {View} from 'react-native';

import styles from './style';

import Button1 from '../../components/ButtonOne/Button1';
import Button2 from '../../components/ButtonTwo/Button2';
import Button3 from '../../components/ButtonThree/Button3';

const ScreenA = () => {
  return (
    <View style={styles.container}>
      <View style={styles.block}>
        <Button1 />
      </View>
      <View style={styles.block}>
        <Button2 />
      </View>
      <View style={styles.block}>
        <Button3 />
      </View>
    </View>
  );
};

export default ScreenA;
