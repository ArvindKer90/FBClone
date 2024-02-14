import {View} from 'react-native';
import React from 'react';
import styles from './styles';
import VectorIcon from '../../utils/vectorIcons';
import FastImage from 'react-native-fast-image';
import Color from '../../utils/color';

interface ProfileCoverProps {
  profileImg: string;
  coverImg: string;
}

const ProfileCover: React.FC<ProfileCoverProps> = props => {
  return (
    <View style={styles.container}>
      <View style={styles.coverImgContainer}>
        <FastImage
          style={styles.img}
          source={{
            uri: props.coverImg,
            priority: FastImage.priority.normal,
          }}
        />
        <VectorIcon
          name={'camera'}
          size={24}
          color={Color.vampireBlack}
          style={styles.cameraBtn}
          type={'Ionicons'}
          onPress={() => {}}
        />
      </View>
      <View style={styles.profileImgContainer}>
        <FastImage
          style={[styles.img, styles.profileImg]}
          source={{
            uri: props.profileImg,
            priority: FastImage.priority.normal,
          }}
        />
        <VectorIcon
          name={'camera'}
          size={24}
          color={Color.vampireBlack}
          style={styles.cameraBtn}
          type={'Ionicons'}
          onPress={() => {}}
        />
      </View>
    </View>
  );
};

export default ProfileCover;
