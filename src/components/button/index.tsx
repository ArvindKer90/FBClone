import {
  TouchableOpacity,
  Text,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
import React from 'react';
import styles from './styles';
import VectorIcon, {VectorType} from '../../utils/vectorIcons';
import Color from '../../utils/color';

interface ButtonProps {
  btnTxt?: string;
  btnStyle?: StyleProp<ViewStyle>;
  txtStyle?: StyleProp<TextStyle>;
  onPress: () => void;
  isLeftImgEnabled?: boolean;
  isRightImgEnabled?: boolean;
  vectorName?: string;
  vectorSize?: number;
  vectorColor?: string;
  vectorType?: string;
  vectorOnPress?: () => void;
  isDisabled?: boolean;
}

const Button: React.FC<ButtonProps> = props => {
  const renderVector = () => {
    return (
      <VectorIcon
        name={props.vectorName !== undefined ? props.vectorName : ''}
        size={props.vectorSize !== undefined ? props.vectorSize : 0}
        color={
          props.vectorColor !== undefined ? props.vectorColor : Color.clear
        }
        type={
          props.vectorType !== undefined
            ? (props.vectorType as keyof VectorType)
            : 'Ionicons'
        }
        onPress={
          props.vectorOnPress !== undefined ? props.vectorOnPress : () => {}
        }
        isDisabled={props?.isDisabled}
      />
    );
  };

  return (
    <TouchableOpacity
      style={[styles.btn, props.btnStyle]}
      onPress={() => {
        props.onPress();
      }}
      disabled={props?.isDisabled}>
      {props.isLeftImgEnabled === true ? renderVector() : null}
      <Text style={[styles.txt, props.txtStyle]}>{props.btnTxt}</Text>
      {props.isRightImgEnabled === true ? renderVector() : null}
    </TouchableOpacity>
  );
};

export default Button;
