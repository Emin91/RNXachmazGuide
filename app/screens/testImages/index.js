import React, {useState} from 'react';
import {
  View,
  Text,
  Modal,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Image,
} from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import icons from '../../constants/icons';
import {SBoxImageSlider} from 'sbox-react-native-image-slider';
const images = [
  {
    url: 'https://i.ytimg.com/vi/cislZ9S0ocA/maxresdefault.jpg',
  },
  {
    url:
      'https://akamai-platform.foxfilm.com/s3/production/201901/5bf0b05c3cc2553fda6dff24458741c29ab0b13e.jpg',
  },
  {
    url:
      'https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fscottmendelson%2Ffiles%2F2019%2F01%2Fdownload-1-1200x675.jpg',
  },
];

const TestPage = ({navigation}) => {
  const [visible, setVisible] = useState(false);

  const renderItem = (width, item, index) => (
    <TouchableWithoutFeedback key={index.toString()}>
      <Image source={{uri: item.url}} style={{width, height: 100}} />
    </TouchableWithoutFeedback>
  );

  return (
    <View>
      <SBoxImageSlider images={images} renderItem={renderItem} />
      {/* <Modal
        visible={visible}
        transparent={false}
        onRequestClose={() => setVisible(false)}>
        
      </Modal>
      <TouchableOpacity onPress={() => setVisible(true)}>
        <Image
          style={{width: 150, height: 150}}
          source={icons.MENU_CULTURE}></Image>
      </TouchableOpacity> */}
    </View>
  );
};

export default TestPage;
