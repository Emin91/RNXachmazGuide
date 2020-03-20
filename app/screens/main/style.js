import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: colors.MAIN_CINDER,
  },
  headerComponent: {
    flex: 0.15,
  },
  scrollView: {
    flex: 1,
    marginTop: 5,
    marginBottom: 10,
  },
});

export default styles;
