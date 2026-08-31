import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';
interface PostLikeCommentsProps {
  like?: number;
  comment?: number;
  share?: number;
}

const            PostLikeComments: React.FC<PostLikeCommentsProps> = props => {
  return (
    <View style={styles.container}>
        <View style={styles.subContainer1}>
          <View><Text>{props.like}</Text></View>
          <View><Text>{props.comment}</Text><Text>{props.share}</Text></View>
        </View>
        <View style={styles.subContainer2}></View>
      <Text>PostLikeComments</Text>
    </View>
  );
};

export default PostLikeComments;
