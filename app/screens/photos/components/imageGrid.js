import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {LightBox} from './lightBox';
import {data} from './imageData';
import MasonryList from 'react-native-masonry-list';
import {colors} from '../../../constants/colors';
import {myFonts} from '../../../constants/fonts';

const ImageGrid = () => {
  const [isVisible, setVisible] = useState(false);
  const [sourceIndex, setSourceIndex] = useState(0);

  const photos = [
    {
      source: sourceIndex,
    },
  ];

  return (
    <View style={{flex: 1}}>
      <LightBox visibility={isVisible} imgData={photos} setState={setVisible} />
      <MasonryList
        columns={2}
        images={data}
        spacing={1}
        backgroundColor={colors.MAIN_CINDER}
        renderIndividualHeader={({title, dimensions: {height}}) => (
          <View
            style={{
              flex: 1,
              zIndex: 1,
              height: 30,
              width: '98%',
              alignSelf: 'center',
              alignItems: 'center',
              backgroundColor: colors.ORANGE,
              justifyContent: 'center',
            }}>
            <Text
              style={{color: colors.SUB_CLAY, fontFamily: myFonts.ARCH_BOLD}}>
              Size {height}
            </Text>
          </View>
        )}
        onPressImage={item => {
          setVisible(true), setSourceIndex(item.source);
        }}
      />
    </View>
  );
};

export default ImageGrid;
