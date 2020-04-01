import React from 'react';
import {View, Text, Image, ScrollView, StatusBar} from 'react-native';
import {colors} from '../../constants/colors';
import HeaderComponent from '../../components/header';
import styles from './style';
import {titles} from '../../constants/strings';
import {bigText} from '../../constants/moreText';
import icons from '../../constants/icons';
import {DescriptionTitle} from '../culture/components/descriptionTitle';
import {images} from '../../constants/images';

const ImagesView = ({img}) => {
  return (
    <Image
      style={{
        width: '100%',
        height: 250,
        borderRadius: 4,
      }}
      resizeMode={'contain'}
      source={img}
    />
  );
};

const SportScreen = ({navigation}) => {
  return (
    <View style={styles.mainView}>
      <StatusBar backgroundColor={colors.SUB_CLAY} />
      <View style={styles.headerComponent}>
        <HeaderComponent
          iconName={icons.MENU_SPORT}
          title={titles.MENU_SPORT}
          navigation={navigation}
        />
      </View>
      <View style={{flex: 0.9}}>
        <ScrollView overScrollMode="never" style={styles.scrollView}>
          <Text style={styles.bigText}>{bigText.SPORT_TEXT}</Text>
          <DescriptionTitle title={titles.SPORT_OLIMP} />
          <ImagesView img={images.IMG_OLIMP_ONE} />
          <ImagesView img={images.IMG_OLIMP_TWO} />
        </ScrollView>
      </View>
    </View>
  );
};

export default SportScreen;
