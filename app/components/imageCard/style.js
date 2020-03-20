import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    height: 300,
    borderRadius: 12,
    marginTop: 20,
    marginHorizontal: 8,
    backgroundColor: colors.SUB_CLAY,
  },
  headerTitleView: {
    flex: 0.15,
    paddingLeft: 10,
    justifyContent: 'center',
  },
  img: {
    borderRadius: 10,
    width: 325,
    height: '100%',
  },
  headerTitle: {
    fontSize: 25,
    fontFamily: 'AvenirNextCyr-Bold',
    color: colors.ORANGE,
  },
  scrollView: {
    flex: 1,
    marginHorizontal: 10,
  },
  scrollContentView: {
    flex: 0.85,
    borderRadius: 10,
    paddingTop: 10,
    paddingBottom: 10,
  },
});

export default styles;
