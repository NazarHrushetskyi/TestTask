import React, {FC} from 'react';

import styled from 'styled-components/native';

import {useAppDispatch, useAppSelector} from '../../hooks/reduxHooks';
import {SetButtonColor} from '../../redux/actions/ScreenOneAction';
import {RootState} from '../../redux/store';

const Button2: FC = () => {
  const dispatch = useAppDispatch();
  const {buttons} = useAppSelector(
    (state: RootState) => state.ScreenOneReducer,
  );

  const ButtonContainer = styled.TouchableOpacity`
    border-radius: 10px;
    border-width: 1px;
    padding-vertical: 8px;
    width: 50%;
    align-self: center;
    background-color: ${({primary}: {primary: string}) => primary};
  `;
  const ButtonText = styled.Text`
    font-size: 20px;
    color: #fff;
    font-weight: bold;
    align-self: center;
    text-transform: uppercase;
  `;

  return (
    <ButtonContainer
      onPress={() => dispatch(SetButtonColor(1))}
      primary={buttons[1].currentColor}>
      <ButtonText>{buttons[1].buttonName}</ButtonText>
    </ButtonContainer>
  );
};

export default Button2;
