import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {images} from '../../constants/images';
import PhotoView from '@merryjs/photo-viewer';
import MasonryList from 'react-native-masonry-list';

const data = [
  {dimensions: {width: 200, height: 250}, num: '1', source: images.IMG_1},
  {dimensions: {width: 200, height: 350}, num: '2', source: images.IMG_2},
  {dimensions: {width: 200, height: 150}, num: '3', source: images.IMG_3},
  {dimensions: {width: 200, height: 320}, num: '4', source: images.IMG_MAP},
  {dimensions: {width: 200, height: 220}, num: '5', source: images.IMG_HISTORY},
  {dimensions: {width: 200, height: 350}, num: '6', source: images.IMG_OLIMP_ONE,},
  {dimensions: {width: 200, height: 350}, num: '7', source: images.IMG_OLIMP_TWO,},
];

const ImageGridTets = () => {
  const [isVisible, setVisible] = useState(false);
  const [sourceIndex, setSourceIndex] = useState(0);

  const photos = [
    {
      source: sourceIndex,
    },
  ];

  const LightBox = () => {
    return (
      <PhotoView
        visible={isVisible}
        data={photos}
        hideStatusBar={true}
        hideShareButton={true}
        initial={1}
        onDismiss={() => setVisible(false)}
      />
    );
  };

  return (
    <View style={{flex: 1}}>
      <LightBox />
      <MasonryList
        columns={2}
        images={data}
        renderIndividualHeader={({column}) => (
          <Text style={{position: 'absolute', zIndex: 1}}>{column}</Text>
        )}
        onPressImage={item => {
          setVisible(true),
            setSourceIndex(item.source),
            console.log('object', item.source);
        }}
      />
    </View>
  );
};

export default ImageGridTets;
