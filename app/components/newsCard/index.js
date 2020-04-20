import React from 'react';
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import styles from './styles';
import { titles } from '../../constants/strings';

const NewsCardComponent = ({
  title,
  date,
  thumbnailURL,
  url,
  description,
  domain,
}) => {
  return (
    <View style={styles.itemsView}>
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => Linking.openURL(domain + url)}
        style={styles.newsItemRows}>
        <View style={styles.imgView}>
          <Image style={styles.img} source={{ uri: domain + thumbnailURL }} />
        </View>
        <View style={styles.descriptionColumnsView}>
          <View style={styles.newsTitleView}>
            <Text style={styles.newsTitle} numberOfLines={2}>
              {title}
            </Text>
          </View>
          <View style={styles.descriptionView}>
            <Text style={styles.descriptionTitle} numberOfLines={3}>
              {description}
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
