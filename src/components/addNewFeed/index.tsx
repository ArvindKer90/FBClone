import {View, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import CircularBtn from '../circularBtn';
import Button from '../button';
import Icons from '../../assets/images/icons';

interface AddNewFeedProps {
  profileImg?: string;
  onPress: () => void;
  onPressProfile: () => void;
}

const AddNewFeed: React.FC<AddNewFeedProps> = props => {
  return (
    <View style={styles.container}>
      <CircularBtn
        profileImg={props.profileImg}
        onPress={() => {
          props.onPressProfile();
        }}
      />
      <Button
        btnTxt="What's on your mind?"
        onPress={() => {
          props.onPress();
        }}
        txtStyle={styles.btnTitle}
        btnStyle={styles.btnContainer}
      />
      <TouchableOpacity style={styles.imgButton} onPress={() => {}}>
        <Icons.ImageIcon height={22} width={22} />
      </TouchableOpacity>
    </View>
  );
};

export default AddNewFeed;
