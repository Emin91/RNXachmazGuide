import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';
import {myFonts} from '../../constants/fonts';

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: colors.MAIN_CINDER,
  },
  headerComponent: {
    flex: 0.15,
  },
  descriptionView: {
    flex: 0.4,
  },
  scrollView: {
    flex: 0.45,
    marginTop: 5,
    marginBottom: 10,
  },
  descriptionText: {
    fontSize: 15,
    paddingLeft: 12,
    fontFamily: myFonts.AVEN_BVOLD_B,
    color: colors.WHITE,
  },
  descriptionListTitle: {
    fontSize: 15,
    paddingTop: 15,
    alignSelf: 'center',
    fontFamily: myFonts.AVEN_BVOLD_B,
    color: colors.ORANGE,
  },
  //Card
  cardView: {
    flex: 1,
    marginTop: 20,
    borderRadius: 10,
    marginHorizontal: 5,
    backgroundColor: colors.ORANGE,
  },
  headerView: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 15,
    fontFamily: myFonts.AVEN_BVOLD_B,
    color: colors.SUB_CLAY,
  },
  contentView: {
    flex: 0.8,
  },
  linesViewRow: {
    flex: 0.11,
    flexDirection: 'row',
  },
  tableName: {
    flex: 0.4,
    justifyContent: 'center',
  },
  tableNameTitle: {
    fontSize: 12,
    paddingLeft: 10,
    paddingVertical: 5,
    fontFamily: myFonts.AVEN_BVOLD_DI,
    color: colors.SUB_CLAY,
  },
  tableDescription: {
    flex: 0.6,
    justifyContent: 'center',
  },
  tableDescriptionTitle: {
    fontSize: 10,
    paddingVertical: 5,
    fontFamily: myFonts.AVEN_BVOLD_D,
    color: colors.SUB_CLAY,
  },
});

export default styles;
