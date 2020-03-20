import React from 'react';
import {View, Text} from 'react-native';
import styles from './style';
import ViewMoreText from 'react-native-view-more-text';

const TextCardComponent = ({headerTitle, textContent}) => {
  return (
    <View style={styles.mainView}>
      <View style={styles.headerTitleView}>
        <Text style={styles.headerTitle}>{headerTitle}</Text>
      </View>
      <View>
        <ViewMoreText numberOfLines={12} textStyle={styles.viewMore}>
          <Text style={styles.infoText}>{textContent}</Text>
        </ViewMoreText>
      </View>
    </View>
  );
};

export default TextCardComponent;
