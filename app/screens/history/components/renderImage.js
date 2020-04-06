import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {DescriptionTitle} from '../../culture/components/descriptionTitle';

export const RenderImage = ({titles, img, active, navigation}) => {
  return (
    <View key={titles}>
      <DescriptionTitle title={titles} />
      <TouchableOpacity
        disabled={active}
        activeOpacity={0.6}
        onPress={() => navigation.navigate('Map')}>
        <Image
          style={{width: '100%', height: 250}}
          resizeMode={'contain'}
          source={img}
        />
      </TouchableOpacity>
    </View>
  );
};
