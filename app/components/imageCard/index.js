import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import styles from './style';
import {images} from '../../constants/images';
import {titles} from '../../constants/strings';

const ImageCardComponent = () => {
  return (
    <View style={styles.mainView}>
      <View style={styles.headerTitleView}>
        <Text style={styles.headerTitle}>{titles.CARDS_TITLE_PHOTO}</Text>
      </View>
      <View style={styles.scrollView}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.scrollContentView}>
          <Image style={styles.img} source={images.IMG_1} />
          <Image style={styles.img} source={images.IMG_1} />
          <Image style={styles.img} source={images.IMG_1} />
          <Image style={styles.img} source={images.IMG_1} />
          <Image style={styles.img} source={images.IMG_1} />
          <Image style={styles.img} source={images.IMG_1} />
          <Image style={styles.img} source={images.IMG_1} />
          <Image style={styles.img} source={images.IMG_1} />
          <Image style={styles.img} source={images.IMG_1} />
          <Image style={styles.img} source={images.IMG_1} />
          <Image style={styles.img} source={images.IMG_1} />
          <Image style={styles.img} source={images.IMG_1} />
          <Image style={styles.img} source={images.IMG_1} />
        </ScrollView>
      </View>
    </View>
  );
};

export default ImageCardComponent;
