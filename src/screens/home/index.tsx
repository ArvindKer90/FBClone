import {
  View,
  SafeAreaView,
  FlatList,
  ScrollView,
  StatusBar,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import Header from '../../components/header';
import AddNewFeed from '../../components/addNewFeed';
import StoryFeed from '../../components/storyFeeds';
import styles from './styles';
import {PostFeeds, StoryFeeds, UserProfile} from '../../utils/interface';
import Feed from '../../components/feed';
import {useDispatch} from 'react-redux';
import {setProfile} from '../../redux/slice/profileSlice';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {HomeStackParams} from '../../navigation';
import Color from '../../utils/color';

interface HomeProps {
  navigation: NativeStackNavigationProp<HomeStackParams, 'HomeScreen'>;
}

const Home = ({navigation}: HomeProps) => {
  const [postFeeds, setPostFeeds] = useState(Array<PostFeeds>);
  const [storyFeeds, setStoryFeeds] = useState(Array<StoryFeeds>);
  const [userProfile, setUserProfile] = useState<UserProfile>();
  const [addUserStoryData, setAddUserStoryData] = useState<StoryFeeds>();
  const dispatch = useDispatch();
  const memoizedDispatch = useCallback(dispatch, [dispatch]);

  useEffect(() => {
    getData();
  }, []);

  const addDummyUserStory = useCallback(() => {
    var addStoryDummyData: StoryFeeds = {
      id: 99,
      firstName: userProfile?.firstName ? userProfile?.firstName : '',
      lastName: userProfile?.lastName ? userProfile?.lastName : '',
      storyImg: '',
      profileImg: userProfile?.profileImg ? userProfile?.profileImg : '',
    };
    setAddUserStoryData(addStoryDummyData);
  }, [userProfile]);

  useEffect(() => {
    if (userProfile !== undefined) {
      addDummyUserStory();
      memoizedDispatch(setProfile(userProfile));
    }
  }, [userProfile, addDummyUserStory, memoizedDispatch]);

  const getData = () => {
    firestore()
      .collection('postFeeds')
      .onSnapshot(docs => {
        const postFeed: any = [];
        docs.forEach(doc => postFeed.push(doc.data()));
        setPostFeeds(postFeed);
      });
    firestore()
      .collection('storyFeeds')
      .onSnapshot(docs => {
        const storyFeed: any = [];
        docs.forEach(doc => storyFeed.push(doc.data()));
        setStoryFeeds(storyFeed);
      });
    firestore()
      .collection('users')
      .onSnapshot(docs => {
        const userProfileData: any = [];
        docs.forEach(doc => userProfileData.push(doc.data()));
        console.log(userProfileData[0]);
        setUserProfile(userProfileData[0]);
      });
  };

  const renderStoryHeader = () => {
    return addUserStoryData !== undefined ? (
      <StoryFeed item={addUserStoryData} isForAddStory={true} />
    ) : null;
  };

  const onPressProfile = useCallback(() => {
    navigation?.navigate('Profile');
  }, [navigation]);

  // const addPost = async () => {
  //   firestore()
  //     .collection('postFeeds')
  //     .add({
  //       id: 5,
  //       firstName: 'Eric',
  //       lastName: 'Davies',
  //       caption:
  //         'Feeling stuck? Try looking at things from a different perspective!',
  //       date: '',
  //       postImg: [
  //         'https://firebasestorage.googleapis.com/v0/b/facebookclone-a9309.appspot.com/o/postImage%2Fpost6.png?alt=media&token=daf622be-74e9-45a8-974f-ed8a758d51d3',
  //       ],
  //       profileImg:
  //         'https://firebasestorage.googleapis.com/v0/b/facebookclone-a9309.appspot.com/o/profileImage%2Fprofile3.jpeg?alt=media&token=0ab8768d-317a-458b-9d7f-987a706e4f8e',
  //       reactionCount: 387,
  //       commentsCount: 194,
  //     });
  // };

  // const addPost = async () => {
  //   firestore().collection('storyFeeds').add({
  //     id: 2,
  //     firstName: 'Joseph',
  //     lastName: 'Coleman',
  //     storyImg:
  //       'https://firebasestorage.googleapis.com/v0/b/facebookclone-a9309.appspot.com/o/storyImage%2Fstory3.jpeg?alt=media&token=64e162ed-3a7a-464f-9be4-8738133150f3',
  //     profileImg:
  //       'https://firebasestorage.googleapis.com/v0/b/facebookclone-a9309.appspot.com/o/profileImage%2Fprofile4.jpeg?alt=media&token=f8167ced-7bfa-4439-8a10-ec94bfa1c8ea',
  //   });
  // };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={Color.white} barStyle="dark-content" />
      <ScrollView>
        <Header />
        <AddNewFeed
          profileImg={userProfile?.profileImg}
          onPressProfile={onPressProfile}
          onPress={() => {}}
        />
        <View style={styles.storiesCollection}>
          <View style={styles.separator} />
          <FlatList
            data={storyFeeds}
            horizontal={true}
            style={styles.flSty}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.contentContainer}
            ListHeaderComponent={renderStoryHeader()}
            renderItem={({item}: {item: StoryFeeds}) => (
              <StoryFeed item={item} isForAddStory={false} />
            )}
          />
          <View style={styles.separator} />
        </View>
        <FlatList
          data={postFeeds}
          style={styles.flFeeds}
          scrollEnabled={false}
          renderItem={({item}: {item: PostFeeds}) => <Feed item={item} />}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
