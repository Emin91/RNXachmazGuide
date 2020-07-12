import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';
import {myFonts} from '../../constants/fonts';

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    borderRadius: 5,
    marginVertical: 2,
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.MAIN_CINDER,
  },
  description: {
    fontSize: 12,
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontFamily: myFonts.MONTSERRAT,
    color: colors.ORANGE,
  },
});

export default styles;
