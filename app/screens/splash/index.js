import React from 'react';
import {View, Image} from 'react-native';
import styles from './style';
import icons from '../../constants/icons';

const SplashScreen = ({navigation}) => {
  setTimeout(() => {
    navigation.navigate('MainScreen');
  }, 1500);

  return (
    <View style={styles.mainView}>
      <Image style={styles.img} resizeMode="center" source={icons.LOGO} />
    </View>
  );
};

export default SplashScreen;
