import React from 'react';
import {View, Text, TouchableOpacity, Linking} from 'react-native';
import styles from './styles';

const RandomNewCard = ({
  title,
  date,
  thumbnailURL,
  description,
  url,
  domain,
}) => {
  return (
    <TouchableOpacity style={styles.mainView} disabled>
        <Text style={styles.description} numberOfLines={3}>
            {title || description}
        </Text>
    </TouchableOpacity>
  );
};

export default RandomNewCard;
