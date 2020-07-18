import React from 'react';
import {View, ScrollView, Text, StatusBar} from 'react-native';
import {colors} from '../../constants/colors';
import HeaderComponent from '../../components/header';
import styles from './style';
import {titles} from '../../constants/strings';
import icons from '../../constants/icons';
import {bigText} from '../../constants/moreText';

const EducationScreen = ({navigation}) => {
  return (
    <View style={styles.mainView}>
      <StatusBar backgroundColor={colors.SUB_CLAY} />
      <View style={styles.headerComponent}>
        <HeaderComponent
          iconName={icons.MENU_EDU}
          title={titles.MENU_EDUCATION}
          navigation={navigation}
        />
      </View>
      <View style={{flex: 0.9}}>
        <ScrollView overScrollMode="never" style={styles.scrollView}>
          <Text style={styles.descriptionText}>{bigText.EDUCATION_TITLE}</Text>
          <Text style={styles.descriptionListTitle}>
            {titles.CARD_ITEM_NAME_EDU_HEAD}
          </Text>
          <Text style={styles.descriptionText}>{bigText.ABOUT_EDU_HEAD}</Text>
        </ScrollView>
      </View>
    </View>
  );
};

export default EducationScreen;
