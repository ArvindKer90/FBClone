import React from 'react';
import {
  StyleProp,
  ViewStyle,
  TouchableOpacity,
  GestureResponderEvent,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import EvilIcons from 'react-native-vector-icons/dist/EvilIcons';
import Feather from 'react-native-vector-icons/dist/Feather';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/dist/FontAwesome5';
import FontAwesome6 from 'react-native-vector-icons/dist/FontAwesome6';
import Fontisto from 'react-native-vector-icons/dist/Fontisto';
import Foundation from 'react-native-vector-icons/dist/Foundation';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/dist/Octicons';
import Zocial from 'react-native-vector-icons/dist/Zocial';
import SimpleLineIcons from 'react-native-vector-icons/dist/SimpleLineIcons';

export type IconType =
  | 'AntDesign'
  | 'Entypo'
  | 'EvilIcons'
  | 'Feather'
  | 'FontAwesome'
  | 'FontAwesome5'
  | 'FontAwesome6'
  | 'Fontisto'
  | 'Foundation'
  | 'Ionicons'
  | 'MaterialIcons'
  | 'MaterialCommunityIcons'
  | 'Octicons'
  | 'Zocial'
  | 'SimpleLineIcons';

export interface VectorType {
  AntDesign: typeof AntDesign;
  Entypo: typeof Entypo;
  EvilIcons: typeof EvilIcons;
  Feather: typeof Feather;
  FontAwesome: typeof FontAwesome;
  FontAwesome5: typeof FontAwesome5;
  FontAwesome6: typeof FontAwesome6;
  Fontisto: typeof Fontisto;
  Foundation: typeof Foundation;
  Ionicons: typeof Ionicons;
  MaterialIcons: typeof MaterialIcons;
  MaterialCommunityIcons: typeof MaterialCommunityIcons;
  Octicons: typeof Octicons;
  Zocial: typeof Zocial;
  SimpleLineIcons: typeof SimpleLineIcons;
}

const iconComponents: VectorType = {
  AntDesign,
  Entypo,
  EvilIcons,
  Feather,
  FontAwesome,
  FontAwesome5,
  FontAwesome6,
  Fontisto,
  Foundation,
  Ionicons,
  MaterialIcons,
  MaterialCommunityIcons,
  Octicons,
  Zocial,
  SimpleLineIcons,
};

interface VectorIconProps {
  name: string;
  size: number;
  color: string;
  type: keyof VectorType;
  style?: StyleProp<ViewStyle>;
  onPress: (event: GestureResponderEvent) => void;
  isDisabled?: boolean;
}

const VectorIcon: React.FC<VectorIconProps> = ({
  name,
  size,
  color,
  type,
  style,
  onPress,
  isDisabled,
}: VectorIconProps) => {
  const IconComponent = iconComponents[type];

  if (!IconComponent) {
    // Handle unknown icon type
    return null;
  }

  return (
    <TouchableOpacity
      style={style}
      disabled={isDisabled}
      onPress={event => onPress(event)}>
      <IconComponent name={name} size={size} color={color} />
    </TouchableOpacity>
  );
};

export default VectorIcon;
