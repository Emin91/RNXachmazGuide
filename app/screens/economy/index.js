import React from 'react';
import {View, Text, ScrollView, StatusBar} from 'react-native';
import {DescriptionTitle} from '../culture/components/descriptionTitle';
import {bigText} from '../../constants/moreText';
import {titles} from '../../constants/strings';
import {colors} from '../../constants/colors';
import styles from './style';
import icons from '../../constants/icons';
import HeaderComponent from '../../components/header';

const EconomyScreen = ({navigation}) => {
  return (
    <View style={styles.mainView}>
      <StatusBar backgroundColor={colors.SUB_CLAY} />
      <View style={styles.headerComponent}>
        <HeaderComponent
          iconName={icons.MENU_ECONOMY}
          title={titles.MENU_ECONOMY}
          navigation={navigation}
        />
      </View>
      <ScrollView overScrollMode="never" style={styles.scrollView}>
        <DescriptionTitle title={titles.ECONOMY_TITLE_ONE} />
        <Text style={styles.bigText}>{bigText.ECONOMY_TEXT_ONE}</Text>
        <DescriptionTitle title={titles.ECONOMY_TITLE_TWO} />
        <Text style={styles.bigText}>{bigText.ECONOMY_TEXT_TWO}</Text>
      </ScrollView>
    </View>
  );
};

export default EconomyScreen;
