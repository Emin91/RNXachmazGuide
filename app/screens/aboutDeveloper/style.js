import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';
import {myFonts} from '../../constants/fonts';

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: colors.MAIN_CINDER,
  },
  imgBackground: {
    width: '100%',
    height: '100%',
  },
  detailsViewOne: {
    flex: 0.5,
  },
  headerView: {
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 30,
  },
  headerTitle: {
    fontSize: 20,
    color: colors.ORANGE,
    fontFamily: myFonts.MONTSERRAT,
  },
  imgView: {
    flex: 0.6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: '40%',
    height: 120,
    borderRadius: 6,
    borderWidth: 4,
    borderColor: 'white',
  },
  authorView: {
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 3,
    backgroundColor: colors.SUB_CLAY,
  },
  authorName: {
    fontSize: 20,
    marginBottom: 5,
    color: colors.ORANGE,
    fontFamily: myFonts.ULTIMA_PRO,
  },
  socialIconsView: {
    flex: 0.2,
    flexDirection: 'row',
  },
  socialIcons: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailsViewTwo: {
    flex: 0.5,
  },
  infoView: {
    width: '100%',
    paddingLeft: 40,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 14,
    fontFamily: myFonts.ULTIMA_PRO,
    paddingTop: 20,
    color: colors.ORANGE,
  },
  touchableTitle: {
    fontSize: 19,
    fontFamily: myFonts.ULTIMA_PRO,
    color: colors.WHITE,
    paddingBottom: 0,
  },
});

export default styles;
