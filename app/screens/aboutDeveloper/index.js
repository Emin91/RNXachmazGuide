import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './style';
import {images} from '../../constants/images';
import {titles} from '../../constants/strings';
import ShareButton from './components/shareButton';
import ItemViews from './components/itemViews';
import SocialButtons from './components/socialButtons';

const AboutAuthorScreen = () => {
  return (
    <View style={styles.mainView}>
      <View style={styles.detailsViewOne}>
        <View style={styles.imgView}>
          <Image source={images.AVATAR} style={styles.img} />
        </View>
        <View style={styles.authorView}>
          <Text style={styles.authorName}>{titles.DEV_PROFILE}</Text>
        </View>
        <SocialButtons />
      </View>
      <View style={styles.detailsViewTwo}>
        <ItemViews />
      </View>
      <ShareButton />
    </View>
  );
};

export default AboutAuthorScreen;
