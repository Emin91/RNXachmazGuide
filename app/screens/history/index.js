import React from 'react';
import {View, Text, ScrollView, StatusBar} from 'react-native';
import {bigText} from '../../constants/moreText';
import {titles} from '../../constants/strings';
import {colors} from '../../constants/colors';
import styles from './style';
import icons from '../../constants/icons';
import HeaderComponent from '../../components/header';
import {RenderImage} from './components/renderImage';
import {imagesList} from './components/imageList';

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
          {imagesList.map(({titles, img, active}) => {
            return (
              <RenderImage
                key={titles}
                navigation={navigation}
                titles={titles}
                img={img}
                active={active}
              />
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

export default HistoryScreen;
