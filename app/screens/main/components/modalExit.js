import React from 'react';
import {
  View,
  Modal,
  Text,
  BackHandler,
  Image,
  TouchableOpacity,
} from 'react-native';
import styles from '../style';
import icons from '../../../constants/icons';
import {titles} from '../../../constants/strings';

const ModalExit = ({visible, setVisible}) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={() => {
        setVisible(false);
      }}>
      <View style={styles.mdView}>
        <View style={styles.mainContainer}>
          <View style={styles.closeButtonVIew}>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => setVisible(false)}>
              <Image
                resizeMode="center"
                style={styles.closeButton}
                source={icons.MODAL_CLOSE_BUTTON}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.titleView}>
            <Text style={styles.title}>{titles.MODAL_TITLE}</Text>
          </View>
          <View style={styles.buttonsView}>
            <TouchableOpacity
              activeOpacity={0.4}
              onPress={() => setVisible(false)}>
              <Text style={styles.buttons}>{titles.MODAL_CANCEL}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.4}
              onPress={() => BackHandler.exitApp()}>
              <Text style={styles.buttons}>{titles.MODAL_EXIT}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ModalExit;
