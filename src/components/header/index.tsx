import {View, Text} from 'react-native';
import React from 'react';
import VectorIcon from '../../utils/vectorIcons';
import styles from './styles';
import Color from '../../utils/color';
const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerTxt}>facebook</Text>
      <View style={styles.btnContainer}>
        <VectorIcon
          name="plus"
          size={20}
          color={Color.vampireBlack}
          type={'FontAwesome6'}
          style={styles.btn}
          onPress={() => {}}
        />
        <VectorIcon
          name="search"
          size={18}
          color={Color.vampireBlack}
          type={'FontAwesome5'}
          style={styles.btn}
          onPress={() => {}}
        />
        <VectorIcon
          name="facebook-messenger"
          size={24}
          color={Color.vampireBlack}
          type={'MaterialCommunityIcons'}
          style={styles.btn}
          onPress={() => {}}
        />
      </View>
    </View>
  );
};

export default Header;
