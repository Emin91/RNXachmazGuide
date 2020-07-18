import React from 'react';
import {View, Text, ScrollView, StatusBar} from 'react-native';
import {colors} from '../../constants/colors';
import HeaderComponent from '../../components/header';
import {titles} from '../../constants/strings';
import icons from '../../constants/icons';
import styles from './styles';
import NewsPresentation from '../../components/settings/NewsPresentation';

const SettingsScreen = ({navigation}) => {
  return (
    <View style={styles.mainView}>
      <StatusBar backgroundColor={colors.SUB_CLAY} />
      <View style={styles.headerComponent}>
        <HeaderComponent
          iconName={icons.MENU_SETTINGS}
          title={titles.MENU_SETTINGS}
          navigation={navigation}
        />
      </View>
      <View style={{flex: 0.9}}>
        <ScrollView overScrollMode="never" style={styles.scrollView}>
          <NewsPresentation />
        </ScrollView>
      </View>
    </View>
  );
};

export default SettingsScreen;
