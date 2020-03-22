import React from 'react';
import {View, Text, ScrollView, StatusBar} from 'react-native';
import {colors} from '../../constants/colors';
import HeaderComponent from '../../components/header';
import styles from './style';
import {titles} from '../../constants/strings';
import {bigText} from '../../constants/moreText';
import icons from '../../constants/icons';

const CultureScreen = ({navigation}) => {
  return (
    <View style={styles.mainView}>
      <StatusBar backgroundColor={colors.SUB_CLAY} />
      <View style={styles.headerComponent}>
        <HeaderComponent
          iconName={icons.MENU_CULTURE}
          title={titles.MENU_CULTURE}
          navigation={navigation}
        />
      </View>
      <ScrollView overScrollMode="never" style={styles.scrollView}>
        <Text style={styles.bigText}>{bigText.CULTURE_TEXT}</Text>
        <View style={styles.titleView}>
          <Text style={styles.title}>{titles.CULTURE_TITLE_ONE}</Text>
        </View>
        <View
          style={{
            width: '100%',
            height: 350,
            backgroundColor: 'green',
          }}>
          <Text>{bigText.CULTURE_TEXT_TWO}</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default CultureScreen;
