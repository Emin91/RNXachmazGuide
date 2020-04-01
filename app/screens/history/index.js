import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';
import {DescriptionTitle} from '../culture/components/descriptionTitle';
import {bigText} from '../../constants/moreText';
import {titles} from '../../constants/strings';
import {colors} from '../../constants/colors';
import {images} from '../../constants/images';
import styles from './style';
import icons from '../../constants/icons';
import HeaderComponent from '../../components/header';

const RenderImage = ({titles, img, active, navigation}) => {
  return (
    <>
      <DescriptionTitle title={titles} />
      <TouchableOpacity
        disabled={active}
        activeOpacity={0.6}
        onPress={() => navigation.navigate('Map')}>
        <Image
          style={{width: '100%', height: 250}}
          resizeMode={'contain'}
          source={img}
        />
      </TouchableOpacity>
    </>
  );
};

const HistoryScreen = ({navigation}) => {
  return (
    <View style={styles.mainView}>
      <StatusBar backgroundColor={colors.SUB_CLAY} />
      <View style={styles.headerComponent}>
        <HeaderComponent
          iconName={icons.MENU_HISTORY}
          title={titles.MENU_HISTORY}
          navigation={navigation}
        />
      </View>
      <View style={{flex: 0.9}}>
        <ScrollView overScrollMode="never" style={styles.scrollView}>
          <Text style={styles.bigText}>{bigText.HISTORY_TEXT}</Text>
          <RenderImage
            navigation={navigation}
            titles={titles.HISTORY_MAP_TITLE}
            img={images.IMG_MAP}
            active={false}
          />
          <RenderImage
            titles={titles.HISTORY_MUZEUM}
            img={images.IMG_HISTORY}
            active={true}
          />
        </ScrollView>
      </View>
    </View>
  );
};

export default HistoryScreen;
