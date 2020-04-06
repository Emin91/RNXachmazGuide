import React from 'react';
import {FloatingAction} from 'react-native-floating-action';
import {actions} from '../components/actionButtonArray';
import {colors} from '../../../constants/colors';

const FloatingButton = () => {
  return (
    <FloatingAction
      actions={actions}
      color={colors.ORANGE}
      distanceToEdge={20}
      actionsPaddingTopBottom={0}
      onPressItem={(name) => {
        console.log(`selected button: ${name}`);
      }}
    />
  );
};

export default FloatingButton;
