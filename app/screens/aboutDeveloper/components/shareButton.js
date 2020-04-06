import React from 'react';
import {colors} from '../../../constants/colors';
import {FloatingAction} from 'react-native-floating-action';
import Icon from 'react-native-vector-icons/AntDesign';
import onItemPress from './onClick';

const ShareButton = () => {
  return (
    <FloatingAction
      color={colors.ORANGE}
      buttonSize={40}
      showBackground={false}
      onPressMain={() => {
        onItemPress(5);
      }}
      floatingIcon={<Icon name="sharealt" size={17} color={colors.SUB_CLAY} />}
    />
  );
};

export default ShareButton;
