import {View} from 'react-native';
import React from 'react';
import styles from './styles';
import VectorIcon from '../../utils/vectorIcons';
import Button from '../button';
import Color from '../../utils/color';

interface ProfileHeaderProps {
  firstName: string;
  lastName: string;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = props => {
  return (
    <View style={styles.container}>
      <VectorIcon
        name={'chevron-back'}
        size={24}
        color={Color.vampireBlack}
        type={'Ionicons'}
        style={[styles.btn, styles.backBtn]}
        // style={styles.btn}
        onPress={() => {}}
      />
      <View style={styles.btn} />
      <Button
        btnTxt={`${props.firstName} ${props.lastName}`}
        txtStyle={styles.btnTitle}
        btnStyle={styles.txtBtn}
        onPress={() => {}}
        isRightImgEnabled={true}
        vectorName={'caret-down'}
        vectorSize={18}
        vectorColor={Color.vampireBlack}
        vectorType={'Ionicons'}
      />
      <VectorIcon
        name={'pen'}
        size={18}
        color={Color.vampireBlack}
        type={'FontAwesome5'}
        style={styles.btn}
        onPress={() => {}}
      />
      <VectorIcon
        name={'search'}
        size={19}
        color={Color.vampireBlack}
        type={'FontAwesome5'}
        style={[styles.btn, styles.searchBtn]}
        // style={styles.btn}
        onPress={() => {}}
      />
    </View>
  );
};

export default ProfileHeader;
