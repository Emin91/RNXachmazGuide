import email from 'react-native-email';
import {titles} from '../constants/strings';

export const sendMail = (
  mail = titles.DEV_ITEM_EMAIL,
  subj = '',
  body = '',
) => {
  console.log('mail', mail);
  const to = mail;
  email(to, {
    subject: subj,
    body: body,
  }).catch(console.error);
};
