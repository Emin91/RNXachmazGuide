import email from 'react-native-email';
import {titles} from '../../../constants/strings';

export const sendMail = () => {
  const to = titles.DEV_ITEM_EMAIL;
  email(to, {
    subject: '',
    body: '',
  }).catch(console.error);
};
