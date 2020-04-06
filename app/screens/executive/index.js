import React from 'react';
import {View, ScrollView, StatusBar} from 'react-native';
import {itemsObj} from './components/itemsObj';
import {Buttons} from './components/buttons';
import {titles} from '../../constants/strings';
import {colors} from '../../constants/colors';
import icons from '../../constants/icons';
import styles from './style';
import HeaderComponent from '../../components/header';

const ExecutiveScreen = ({navigation}) => {
  return (
    <View style={styles.mainView}>
      <StatusBar backgroundColor={colors.SUB_CLAY} />
      <View style={styles.headerComponent}>
        <HeaderComponent
          iconName={icons.MENU_EXECUTIVE}
          title={titles.MENU_EXECUTIVE}
          navigation={navigation}
        />
      </View>
      <View style={{flex: 0.9}}>
        <ScrollView overScrollMode="never" style={styles.scrollView}>
          <View style={{flex: 1, paddingTop: 20}}>
            {itemsObj.map(({title, index}) => {
              return (
                <Buttons
                  key={title}
                  navigation={navigation}
                  itemsTitle={title}
                />
              );
            })}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default ExecutiveScreen;
