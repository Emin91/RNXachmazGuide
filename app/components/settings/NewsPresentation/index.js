import React from 'react';
import {View, Text} from 'react-native';
import SwitchSelector from 'react-native-switch-selector';
import styles from './styles';
import {colors} from '../../../constants/colors';
import {titles} from '../../../constants/strings';
import {useDispatch, useSelector} from 'react-redux';
import {
  newsActions,
  increaseNewsCountActions,
  decreaseNewsCountActions,
} from '../../../screens/settingScreen/redux/actions';
import InputSpinner from 'react-native-input-spinner';
import NewsCardPreview from '../../../screens/main/components/newsCardPreview';

const NewsPresentation = () => {
  const options = [
    {label: titles.SETTINGS_NEWS_WITH_IMAGE, value: 'image'},
    {label: titles.SETTINGS_NEWS_SIMPLE, value: 'simple'},
  ];

  const dispatch = useDispatch();
  const {counter} = useSelector(state => state.newsReducer);

  return (
    <View style={styles.mainView}>
      <View style={styles.container}>
        <Text style={styles.title}>{titles.SETTINGS_NEWS_PRESENTATION}</Text>
        <SwitchSelector
          hasPadding
          initial={0}
          borderWidth={0}
          valuePadding={2}
          options={options}
          buttonColor={colors.ORANGE}
          selectedColor={colors.WHITE}
          backgroundColor={colors.MAIN_CINDER}
          onPress={value => dispatch(newsActions(value))}
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>{titles.SETTINGS_NEWS_COUNT}</Text>
        <InputSpinner
          min={3}
          max={12}
          step={1}
          fontSize={25}
          value={counter}
          rounded={false}
          editable={false}
          colorMax={colors.RED}
          background={colors.ORANGE}
          colorMin={colors.MAIN_CINDER}
          textColor={colors.MAIN_CINDER}
          onIncrease={increased => dispatch(increaseNewsCountActions(increased))}
          onDecrease={decreased => dispatch(decreaseNewsCountActions(decreased))}
        />
      </View>
      <View style={styles.containerPreview}>
        <Text style={styles.titlePreview}>{titles.SETTINGS_NEWS_PREVIEW_TEXT}</Text>
        <NewsCardPreview />
      </View>
    </View>
  );
};
export default NewsPresentation;