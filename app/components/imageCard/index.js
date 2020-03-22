import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import styles from './style';
import {images} from '../../constants/images';
import {titles} from '../../constants/strings';
import ViewSlider from 'react-native-view-slider';

const entries = [
  {
    uri: '../../assets/images/bg.jpg',
  },
  {
    uri: '../../assets/images/bg.jpg',
  },
];

const ImageCardComponent = () => {
  const [carousel, setCor] = useState({});

  return (
    <View style={styles.mainView}>
      <View style={styles.headerTitleView}>
        <Text style={styles.headerTitle}>{titles.CARDS_TITLE_PHOTO}</Text>
      </View>
      <View style={styles.imageSliderView}>
        <ViewSlider
          renderSlides={
            <>
              <Image
                source={require('../../assets/images/bg.jpg')}
                // resizeMode={'center'}
                style={{width: 350, height: '100%'}}
              />
              <Image
                source={require('../../assets/images/menuImage.jpg')}
                // resizeMode={'center'}
                style={{width: 350, height: '100%'}}
              />
              <Image
                source={require('../../assets/images/bg.jpg')}
                // resizeMode={'center'}
                style={{width: 350, height: '100%'}}
              />
              <Image
                source={require('../../assets/images/menuImage.jpg')}
                // resizeMode={'center'}
                style={{width: 350, height: '100%'}}
              />
            </>
          }
          style={styles2.slider} //Main slider container style
          height={200} //Height of your slider
          slideCount={4} //How many views you are adding to slide
          dots={true} // Pagination dots visibility true for visibile
          dotActiveColor="red" //Pagination dot active color
          dotInactiveColor="gray" // Pagination do inactive color
          dotsContainerStyle={styles2.dotContainer} // Container style of the pagination dots
          autoSlide={false} //The views will slide automatically
          slideInterval={4000} //In Miliseconds
        />
      </View>
    </View>
  );
};

const styles2 = StyleSheet.create({
  slider: {
    // alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink',
  },
  dotContainer: {
    backgroundColor: 'transparent',
    position: 'absolute',
    bottom: 0,
  },
});

export default ImageCardComponent;
