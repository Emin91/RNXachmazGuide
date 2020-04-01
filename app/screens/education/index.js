import React from 'react';
import {View, ScrollView, Text, StatusBar} from 'react-native';
import {colors} from '../../constants/colors';
import HeaderComponent from '../../components/header';
import styles from './style';
import {titles} from '../../constants/strings';
import icons from '../../constants/icons';
import {bigText} from '../../constants/moreText';
import SchoolCards from './components/schoolCards';
import {schoolList} from './components/schoolListArray';

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
        <View>
          <Text style={styles.descriptionText}>{bigText.EDUCATION_TITLE}</Text>
          <Text style={styles.descriptionListTitle}>
            {titles.CARD_ITEM_NAME}
          </Text>
        </View>
        <ScrollView overScrollMode="never" style={styles.scrollView}>
          {schoolList.map(
            ({
              num,
              schoolName,
              director,
              location,
              created,
              studentCount,
              teacherCount,
              description,
            }) => {
              return (
                <SchoolCards
                  key={num}
                  schoolName={schoolName}
                  director={director}
                  location={location}
                  created={created}
                  studentCount={studentCount}
                  teacherCount={teacherCount}
                  description={description}></SchoolCards>
              );
            },
          )}
        </ScrollView>
      </View>
    </View>
  );
};

export default EducationScreen;
