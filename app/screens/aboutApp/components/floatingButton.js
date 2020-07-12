import React, {useState} from 'react';
import {FloatingAction} from 'react-native-floating-action';
import {actions} from '../components/actionButtonArray';
import {colors} from '../../../constants/colors';
import {sendMail} from '../../../components/sendMail';
import {titles} from '../../../constants/strings';

const FloatingButton = ({navigation}) => {
  const mail = titles.DEV_MAIL_SEND;
  const subj = titles.DEV_MAIL_SUBJ;
  const body = titles.DEV_MAIL_BODY;

  const onPressButtons = (name) => {
    switch (name) {
      case 'bt_settings':
        navigation.navigate('Settings')
        break;
      case 'bt_write':
        sendMail(mail, subj, body);
        break;
      case 'bt_developer':
        navigation.navigate('AboutDeveloper')
        break;
      default:
        break;
    }
  }
  
  return (
    <FloatingAction
      actions={actions}
      color={colors.ORANGE}
      distanceToEdge={20}
      actionsPaddingTopBottom={0}
      onPressItem={name => onPressButtons(name)}
    />
  );
};

export default FloatingButton;