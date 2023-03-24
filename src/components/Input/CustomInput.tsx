import React, {FC, useState} from 'react';

import styles from './style';
import {TextInput, View} from 'react-native';

interface IAmount {
  onChange: (value: string) => void;
  value?: number | null;
}

const Amount: FC<IAmount> = ({onChange}) => {
  const [num, setNum] = useState<number>(1);
  const onChangeInput = (event: string) => {
    setNum(Number(event));
    onChange(event);
  };
  return (
    <View style={styles.container}>
      <TextInput
        keyboardType="numeric"
        style={styles.input}
        value={num.toString()}
        onChangeText={onChangeInput}
      />
    </View>
  );
};

export default Amount;
