import React from 'react';
import {FloatingAction} from 'react-native-floating-action';
import {actions} from '../components/actionButtonArray';
import {colors} from '../../../constants/colors';
import {sendMail} from '../../../components/sendMail';
import {titles} from '../../../constants/strings';

const FloatingButton = ({navigation}) => {
  const mail = titles.DEV_MAIL_SEND;
  const subj = titles.DEV_MAIL_SUBJ;
  const body = titles.DEV_MAIL_BODY;
  return (
    <FloatingAction
      actions={actions}
      color={colors.ORANGE}
      distanceToEdge={20}
      actionsPaddingTopBottom={0}
      onPressItem={name =>
        name === 'bt_write'
          ? sendMail(mail, subj, body)
          : navigation.navigate('AboutDeveloper')
      }
    />
  );
};

export default FloatingButton;
