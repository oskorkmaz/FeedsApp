import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  Platform,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import ReactNativeModal from 'react-native-modal';
import {theme} from '../theme/DefaultTheme';
import {makeStyles} from '../theme/makeStyles';
type ModalStyle = {
  rootView: ViewStyle;
  textView: ViewStyle;
  cancelButton: ViewStyle;
  text: TextStyle;
};
interface ModalProps {
  readonly modalVisible: boolean;
  readonly setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}
const Modal: React.FC<ModalProps> = ({modalVisible, setModalVisible}) => {
  var classes = useStyles();

  return (
    <ReactNativeModal
      isVisible={modalVisible}
      onBackdropPress={() => setModalVisible(false)}>
      <View style={classes.rootView}>
        <View style={classes.textView}>
          <Text style={[classes.text, {color: '#EF4444'}]}>Delete</Text>
        </View>
        <View style={classes.textView}>
          <Text style={classes.text}>Share</Text>
        </View>
        <View style={classes.textView}>
          <Text style={classes.text}>Add to Curation</Text>
        </View>
      </View>
      <TouchableOpacity
        style={classes.cancelButton}
        onPress={() => {
          setModalVisible(false);
        }}>
        <Text style={classes.text}>Cancel</Text>
      </TouchableOpacity>
    </ReactNativeModal>
  );
};
export default Modal;
const useStyles = makeStyles<ModalStyle, ModalProps>(_props => ({
  rootView: {
    width: Dimensions.get('window').width * 0.9,
    height: 162,
    backgroundColor: 'white',
    bottom: 74,
    position: 'absolute',
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textView: {
    height: 54,
    width: Dimensions.get('window').width * 0.9,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: 'rgba(0,0,0,0.2)',
    borderBottomWidth: 0.5,
  },
  cancelButton: {
    height: 54,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    bottom: 10,
    position: 'absolute',
    width: Dimensions.get('window').width * 0.9,
    borderRadius: 14,
  },
  text: {
    ...Platform.select({
      ios: {
        ...theme.fonts.ios.p1,
      },
      android: {
        ...theme.fonts.android.p1,
      },
    }),
    color: theme.colors.text,
    fontWeight: '400',
    fontSize: 17,
    lineHeight: 22,
  },
}));
