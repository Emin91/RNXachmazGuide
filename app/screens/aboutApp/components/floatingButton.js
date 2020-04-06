import React from 'react';
import {FloatingAction} from 'react-native-floating-action';
import {actions} from '../components/actionButtonArray';
import {colors} from '../../../constants/colors';

const FloatingButton = ({navigation}) => {
  return (
    <FloatingAction
      actions={actions}
      color={colors.ORANGE}
      distanceToEdge={20}
      actionsPaddingTopBottom={0}
      onPressItem={() => {
        navigation.navigate('AboutDeveloper');
      }}
    />
  );
};

export default FloatingButton;
