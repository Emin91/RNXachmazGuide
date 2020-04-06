import {titles} from '../../../constants/strings';
import styles from '../style';
import {bigText} from '../../../constants/moreText';

export const textElements = [
  {
    viewStyle: styles.titleView,
    textStyle: styles.title,
    text: titles.MAIN_TITLE,
  },
  {
    viewStyle: styles.mainTextView,
    textStyle: styles.mainText,
    text: bigText.ABOUT_APP_TEXT,
  },
  {
    viewStyle: styles.versionView,
    textStyle: styles.version,
    text: titles.VERSION,
  },
];
