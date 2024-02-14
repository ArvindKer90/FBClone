import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {PostFeeds} from '../../utils/interface';
import styles from './styles';
import CircularBtn from '../circularBtn';
import VectorIcon from '../../utils/vectorIcons';
import Color from '../../utils/color';
import ImageGrid from '../imageGrid';
import {calculateTimeDifference} from '../../utils/helper';
import PostLikeComments from '../postLikeComments';

interface FeedProps {
  item: PostFeeds;
}

const Feed: React.FC<FeedProps> = props => {
  const [dateStr, setDateStr] = useState('');

  useEffect(() => {
    // Get image dimensions asynchronously
    if (props.item.date != null || undefined) {
      const date: string = calculateTimeDifference(props.item.date);
      setDateStr(date);
    }
  }, [props.item.date]);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <CircularBtn profileImg={props.item.profileImg} onPress={() => {}} />
        <View style={styles.postDetailContainer}>
          <Text style={styles.nameTxt}>
            {props.item.firstName} {props.item.lastName}
            {'  '}
            <Text style={styles.sharedPostTxt}>shared a post.</Text>
          </Text>
          <View style={styles.dateTxt}>
            <Text
              style={{
                color: Color.dimGray,
              }}>
              {dateStr}
              {' . '}
            </Text>
            <VectorIcon
              name={props.item.privacy === 'public' ? 'earth-asia' : 'people'}
              size={props.item.privacy === 'public' ? 15 : 18}
              color={Color.dimGray}
              type={
                props.item.privacy === 'public' ? 'FontAwesome6' : 'Ionicons'
              }
              style={
                props.item.privacy === 'private'
                  ? {transform: [{scaleX: -1}]}
                  : null
              }
              onPress={() => {}}
              isDisabled={true}
            />
          </View>
        </View>
        <View style={styles.btnContainer}>
          <VectorIcon
            name="dots-three-horizontal"
            size={18}
            color={Color.dimGray}
            type={'Entypo'}
            style={styles.imgButton}
            onPress={() => {}}
          />
          <VectorIcon
            name="close"
            size={24}
            color={Color.dimGray}
            type={'AntDesign'}
            style={styles.imgButton}
            onPress={() => {}}
          />
        </View>
      </View>
      {props.item.caption !== '' ? (
        <Text style={styles.captionTxt}>{props.item.caption}</Text>
      ) : null}
      <ImageGrid images={props.item.postImg} />
      <PostLikeComments />
    </View>
  );
};

export default Feed;
