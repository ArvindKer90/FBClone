import {StyleProp, TouchableOpacity, ViewStyle, ImageStyle} from 'react-native';
import React from 'react';
import styles from './styles';
import FastImage from 'react-native-fast-image';

interface CircularBtnProps {
  profileImg?: string;
  btnStyle?: StyleProp<ViewStyle>;
  imgStyle?: StyleProp<ImageStyle>;
  isBorderVisible?: boolean;
  onPress: () => void;
}

const CircularBtn: React.FC<CircularBtnProps> = props => {
  return (
    <TouchableOpacity
      style={[styles.btn, props.btnStyle]}
      onPress={() => {
        props.onPress();
      }}>
      <FastImage
        style={[styles.img, props.isBorderVisible ? styles.borderImg : null]}
        source={{
          uri: props.profileImg,
          priority: FastImage.priority.normal,
        }}
      />
    </TouchableOpacity>
  );
};

export default CircularBtn;
