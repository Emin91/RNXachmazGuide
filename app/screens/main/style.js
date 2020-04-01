import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';
import {myFonts} from '../../constants/fonts';

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: colors.MAIN_CINDER,
  },
  headerComponent: {
    flex: 0.1,
  },
  scrollView: {
    flex: 1,
    marginTop: 5,
    marginBottom: 10,
  },
  //ModalView
  mdView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  mainContainer: {
    width: '100%',
    height: 150,
    borderRadius: 15,
    borderWidth: 5,
    borderColor: colors.ORANGE,
    backgroundColor: colors.SUB_CLAY,
  },
  closeButtonVIew: {
    flex: 1,
    paddingRight: 7,
  },
  closeButton: {
    alignSelf: 'flex-end',
    width: '10%',
    height: '100%',
  },
  titleView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'red',
  },
  title: {
    fontSize: 26,
    fontFamily: myFonts.BALOO,
    color: colors.ORANGE,
  },
  buttonsView: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  buttons: {
    fontSize: 25,
    paddingHorizontal: 30,
    fontFamily: myFonts.BALOO,
    color: colors.ORANGE,
  },
});

export default styles;
