import React from 'react';
import {Text, SafeAreaView, FlatList, View, RefreshControl} from 'react-native';

import {RootState} from '../../redux/store';
import {useAppDispatch, useAppSelector} from '../../hooks/reduxHooks';

import {setUserId, fetchData} from '../../redux/actions/ScreenTwoAction';

import {RootBottomScreenProps, SCREENS} from '../../types/navigation';

import styles from './style';

import CustomInput from '../../components/Input/CustomInput';
import CustomBtn from '../../components/CustomButton/CustomButton';
import {Alert} from 'react-native';

const ScreenB: RootBottomScreenProps<SCREENS.SCREENB> = () => {
  const dispatch = useAppDispatch();

  const onRefresh = React.useCallback(() => {
    dispatch(fetchData(true));
  }, []);

  const {userId, refresh, response} = useAppSelector(
    (state: RootState) => state.ScreenTwoReducer,
  );

  return (
    <SafeAreaView>
      <View style={styles.top}>
        <Text style={styles.title}>Enter number from 1 to 10</Text>
        <CustomInput
          value={userId}
          onChange={v => {
            Number(v) > 10
              ? Alert.alert('Please, enter number from 1 to 10')
              : dispatch(setUserId(Number(v)));
          }}
        />
      </View>
      <CustomBtn
        title="Fetch"
        onClick={() => {
          dispatch(fetchData());
        }}
      />

      {response && (
        <View style={styles.result}>
          <FlatList
            data={response}
            refreshControl={
              <RefreshControl
                refreshing={refresh}
                onRefresh={() => {
                  onRefresh();
                }}
                tintColor={'gray'}
              />
            }
            renderItem={({item}) => (
              <View>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.body}>{item.body}</Text>
              </View>
            )}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default ScreenB;
