import React from 'react';
import {View, ScrollView, Text, Image, StatusBar} from 'react-native';
import {titles} from '../../constants/strings';
import {colors} from '../../constants/colors';
import styles from './style';
import {images} from '../../constants/images';
import {bigText} from '../../constants/moreText';
import HeaderComponent from '../../components/header';

const ExecutiveHeadScreen = ({navigation}) => {
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
      <ScrollView overScrollMode="never" style={styles.scrollView}>
        <View
          style={{
            width: '100%',
            height: 150,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            resizeMode="center"
            style={{
              width: '90%',
              height: '90%',
            }}
            source={images.HEAD}
          />
        </View>
        <View style={{width: '100%'}}>
          <Text style={styles.itemTitle}>{titles.HEAD_NAME}</Text>
          <Text style={styles.itemText}>{bigText.ABOUT_HEAD}</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default ExecutiveHeadScreen;