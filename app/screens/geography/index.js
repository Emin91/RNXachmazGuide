import React from 'react';
import {View, Text, ScrollView, StatusBar} from 'react-native';
import {DescriptionTitle} from '../culture/components/descriptionTitle';
import {description} from './components/description';
import {titles} from '../../constants/strings';
import {colors} from '../../constants/colors';
import icons from '../../constants/icons';
import styles from './style';
import HeaderComponent from '../../components/header';
import {bigText} from '../../constants/moreText';

const GeographyScreen = ({navigation}) => {
  return (
    <View style={styles.mainView}>
      <StatusBar backgroundColor={colors.SUB_CLAY} />
      <View style={styles.headerComponent}>
        <HeaderComponent
          iconName={icons.MENU_GEO}
          title={titles.MENU_GEO}
          navigation={navigation}
        />
      </View>
      <ScrollView overScrollMode="never" style={styles.scrollView}>
        <DescriptionTitle title={titles.GEO_TITLE} />
        <Text style={styles.bigText}>{bigText.GEO_TEXT_ONE}</Text>
        <Text style={styles.bigText}>{bigText.GEO_TEXT_TWO}</Text>
      </ScrollView>
    </View>
  );
};

export default GeographyScreen;
