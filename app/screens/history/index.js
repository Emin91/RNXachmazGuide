import React from 'react';
import {View, Text, ScrollView, StatusBar} from 'react-native';
import {colors} from '../../constants/colors';
import HeaderComponent from '../../components/header';
import styles from './style';
import {titles} from '../../constants/strings';
import {bigText} from '../../constants/moreText';

const HistoryScreen = ({navigation}) => {
  return (
    <View style={styles.mainView}>
      <StatusBar backgroundColor={colors.MAIN_CINDER} />
      <View style={styles.headerComponent}>
        <HeaderComponent title={titles.MENU_HISTORY} navigation={navigation} />
      </View>
      <ScrollView overScrollMode="never" style={styles.scrollView}>
        <Text style={styles.bigText}>{bigText.HISTORY_TEXT}</Text>
      </ScrollView>
    </View>
  );
};

export default HistoryScreen;
