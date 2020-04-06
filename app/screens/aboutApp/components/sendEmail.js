import email from 'react-native-email';

export const handleEmail = () => {
  const to = 'mail@xachmaz-ih.gov.az'; // string or array of email addresses
  email(to, {
    subject: 'Mövzu',
    body: 'Sizin mətn',
  }).catch(console.error);
};
