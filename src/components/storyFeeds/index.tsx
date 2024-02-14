import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';
import {StoryFeeds} from '../../utils/interface';
import LinearGradient from 'react-native-linear-gradient';
import Color from '../../utils/color';
import CircularBtn from '../circularBtn';
import FastImage from 'react-native-fast-image';
import VectorIcon from '../../utils/vectorIcons';

interface StoryFeedsProps {
  item: StoryFeeds;
  isForAddStory: boolean;
}

const StoryFeed: React.FC<StoryFeedsProps> = props => {
  return props.isForAddStory ? (
    <>
      <View style={styles.addStoryContainer}>
        <FastImage
          style={[styles.bgImg, styles.addStoryBgImg]}
          source={{
            uri: props.item.profileImg,
            priority: FastImage.priority.normal,
          }}
        />
        <VectorIcon
          name={'pluscircle'}
          size={30}
          color={Color.ultramarineBlue}
          type={'AntDesign'}
          style={styles.addStoryBtn}
          onPress={() => {}}
        />
        <Text style={[styles.txt, styles.addStoryTxt]}>{'Create\nstory'}</Text>
      </View>
    </>
  ) : (
    <>
      <View style={styles.container}>
        <FastImage
          style={styles.bgImg}
          source={{
            uri: props.item.storyImg,
            priority: FastImage.priority.normal,
          }}
        />

        <LinearGradient
          colors={[Color.clear, Color.clearBlack]}
          style={styles.bgImg}
        />
        <CircularBtn
          profileImg={props.item.profileImg}
          btnStyle={styles.btn}
          isBorderVisible={true}
          onPress={() => {}}
        />
        <View style={styles.txtContainer}>
          <Text style={styles.txt}>
            {props.item.firstName} {props.item.lastName}
          </Text>
        </View>
      </View>
    </>
  );
};

export default StoryFeed;
