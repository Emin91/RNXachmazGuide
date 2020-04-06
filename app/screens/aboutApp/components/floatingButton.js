import React from 'react';
import {FloatingAction} from 'react-native-floating-action';
import {actions} from '../components/actionButtonArray';
import {colors} from '../../../constants/colors';
import {handleEmail} from './sendEmail';

const FloatingButton = ({navigation}) => {
  console.log(navigation);
  return (
    <FloatingAction
      actions={actions}
      color={colors.ORANGE}
      distanceToEdge={20}
      actionsPaddingTopBottom={0}
      onPressItem={(name) =>
        name == 'bt_write'
          ? handleEmail()
          : navigation.navigate('AboutDeveloper')
      }
    />
  );
};

export default FloatingButton;
