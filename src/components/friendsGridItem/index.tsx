import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';
import {FriendsData} from '../../utils/interface';
import FastImage from 'react-native-fast-image';

interface FriendsGridItemProps {
  item: FriendsData;
}

const FriendsGridItem: React.FC<FriendsGridItemProps> = props => {
  return (
    <View style={styles.container}>
      <FastImage
        style={styles.bgImg}
        source={{
          uri: props.item.profileImg,
          priority: FastImage.priority.normal,
        }}
      />
      <View style={styles.txtContainer}>
        <Text style={styles.txt}>
          {props.item.firstName} {props.item.lastName}
        </Text>
      </View>
    </View>
  );
};

export default FriendsGridItem;
