import React from 'react';
import {View, Text} from 'react-native';
import styles from './style';
import {titles} from '../../constants/strings';

const ImageCardComponent = () => {
  return (
    <View style={styles.mainView}>
      <View style={styles.headerTitleView}>
        <Text style={styles.headerTitle}>{titles.CARDS_TITLE_PHOTO}</Text>
      </View>
      <View style={styles.imageSliderView}>
        <Text>sxsx</Text>
      </View>
    </View>
  );
};

export default ImageCardComponent;
