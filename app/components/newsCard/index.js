import React from 'react';
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import styles from './styles';
import { titles } from '../../constants/strings';
import { colors } from '../../constants/colors';

const NewsCardComponent = ({
  title,
  description,
  date,
  thumbnailURL,
  url,
  index,
  domain,
}) => {
  return (
    <View style={styles.itemsView}>
      <TouchableOpacity
        disabled
        style={styles.newsItemRows}>
        <View style={styles.imgView}>
          <Image style={styles.img} source={{ uri: domain + thumbnailURL }} />
        </View>
        <View style={styles.descriptionColumnsView}>
          <View style={styles.newsTitleView}>
            <Text style={styles.newsTitle} numberOfLines={5}>
              {title || description}
            </Text>
          </View>
          <View style={styles.detailsView}>
            <Text style={styles.date} numberOfLines={5}>
              {date}
            </Text>
            <Text style={styles.date} numberOfLines={5}>
              {titles.CARDS_MORE}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default NewsCardComponent;
