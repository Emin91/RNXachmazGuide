import React from 'react';
import {View, Image, StatusBar} from 'react-native';
import styles from './style';
import icons from '../../constants/icons';
import {colors} from '../../constants/colors';

const SplashScreen = ({navigation}) => {
  setTimeout(() => {
    navigation.navigate('MainScreen');
  }, 1500);

  return (
    <View style={styles.mainView}>
      <StatusBar hidden backgroundColor={colors.SUB_CLAY} />
      <Image style={styles.img} resizeMode="center" source={icons.LOGO} />
    </View>
  );
};

export default SplashScreen;
