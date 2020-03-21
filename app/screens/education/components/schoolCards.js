import React from 'react';
import {View, Text} from 'react-native';
import {titles} from '../../../constants/strings';
import ItemList from './itemList';
import styles from '../style';

const SchoolCards = ({
  schoolName,
  director,
  location,
  created,
  studentCount,
  teacherCount,
  description,
}) => {
  return (
    <View style={styles.cardView}>
      <View style={styles.headerView}>
        <Text style={styles.headerTitle}>{schoolName}</Text>
      </View>
      <View style={styles.contentView}>
        <ItemList
          index={true}
          title={titles.CARD_ITEM_NAME_DIRECTOR}
          item={director}
        />
        <ItemList
          index={false}
          title={titles.CARD_ITEM_NAME_LOCATION}
          item={location}
        />
        <ItemList
          index={true}
          title={titles.CARD_ITEM_NAME_CREATED}
          item={created}
        />
        <ItemList
          index={false}
          title={titles.CARD_ITEM_NAME_STUDENT_COUNT}
          item={studentCount}
        />
        <ItemList
          index={true}
          title={titles.CARD_ITEM_NAME_TEACHER_COUNT}
          item={teacherCount}
        />
        <ItemList
          index={false}
          title={titles.CARD_ITEM_NAME_INFO}
          item={description}
        />
      </View>
    </View>
  );
};

export default SchoolCards;
