import React from 'react';
import {View, StatusBar} from 'react-native';
import {DescriptionTitle} from '../culture/components/descriptionTitle';
import {titles} from '../../constants/strings';
import {colors} from '../../constants/colors';
import {images} from '../../constants/images';
import styles from './style';
import icons from '../../constants/icons';
import HeaderComponent from '../../components/header';
import ImageGrid from './components/imageGrid';

const PhotosScreen = ({navigation}) => {
  return (
    <View style={styles.mainView}>
      <StatusBar backgroundColor={colors.SUB_CLAY} />
      <View style={styles.headerComponent}>
        <HeaderComponent
          iconName={icons.MENU_PHOTOS}
          title={titles.MENU_PHOTOS}
          navigation={navigation}
        />
      </View>
      <View style={{flex: 0.9}}>
        <DescriptionTitle title={titles.CARDS_TITLE_GEO_POSITION} />
        <ImageGrid />
      </View>
    </View>
  );
};

export default PhotosScreen;
