import React from 'react';
import {View, Text, ScrollView, StatusBar} from 'react-native';
import {DescriptionTitle} from '../culture/components/descriptionTitle';
import {description} from './components/description';
import {titles} from '../../constants/strings';
import {colors} from '../../constants/colors';
import icons from '../../constants/icons';
import styles from './style';
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
      <View style={{flex: 0.9}}>
        <ScrollView overScrollMode="never" style={styles.scrollView}>
          {description.map(({descriptionTitle, descriptionText}) => {
            return (
              <View key={descriptionTitle}>
                <DescriptionTitle title={descriptionTitle} />
                <Text style={styles.bigText}>{descriptionText}</Text>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

export default EconomyScreen;
