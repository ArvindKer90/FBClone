import {FlatList, SafeAreaView, ScrollView, Text, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store';
import ProfileHeader from '../../components/profileHeader';
import ProfileCover from '../../components/ProfileCover';
import styles from './styles';
import Button from '../../components/button';
import VectorIcon from '../../utils/vectorIcons';
import Color from '../../utils/color';
import FriendsGridItem from '../../components/friendsGridItem';
import {FriendsData} from '../../utils/interface';

const Profile = () => {
  const profile = useSelector((state: RootState) => state.profile);

  return (
    <SafeAreaView style={styles.container}>
      <ProfileHeader
        firstName={profile.firstName}
        lastName={profile.lastName}
      />
      <ScrollView style={styles.scrollview}>
        <ProfileCover
          profileImg={profile.profileImg}
          coverImg={profile.coverImg}
        />
        <Text style={styles.profileName}>
          {profile.firstName} {profile.lastName}
        </Text>
        <Text style={styles.headersTxt}>
          {profile.friendsCount} <Text style={styles.generalTxt}>friends</Text>
        </Text>
        <View style={styles.rowContainer}>
          <Button
            btnTxt={'Add to story'}
            txtStyle={styles.addStorytxt}
            btnStyle={styles.addStoryBtn}
            onPress={() => {}}
            isLeftImgEnabled={true}
            vectorName={'plus'}
            vectorSize={16}
            vectorColor={Color.white}
            vectorType={'FontAwesome6'}
          />
          <Button
            btnTxt={'Edit Profile'}
            txtStyle={styles.editProfileTxt}
            btnStyle={styles.editProfileBtn}
            onPress={() => {}}
            isLeftImgEnabled={true}
            vectorName={'pen'}
            vectorSize={14}
            vectorColor={Color.vampireBlack}
            vectorType={'FontAwesome5'}
          />
          <VectorIcon
            name={'dots-three-horizontal'}
            size={18}
            color={Color.dimGray}
            type={'Entypo'}
            style={styles.menuBtn}
            onPress={() => {}}
          />
        </View>
        <View style={styles.separator} />
        <Text style={styles.headersTxt}>{'Details'}</Text>
        <Button
          btnTxt={`Followed by ${profile.followersCount} people`}
          txtStyle={[styles.subHeadersTxt, styles.followerCountTxt]}
          btnStyle={styles.followerCountContainer}
          onPress={() => {}}
          isLeftImgEnabled={true}
          vectorName={'rss'}
          vectorSize={24}
          vectorColor={Color.dimGray}
          vectorType={'Feather'}
          isDisabled={true}
        />
        <Button
          btnTxt={'See Your About Info'}
          txtStyle={[styles.subHeadersTxt, styles.aboutInfoTxt]}
          btnStyle={styles.btnAboutInfo}
          onPress={() => {}}
          isLeftImgEnabled={true}
          vectorName={'dots-three-horizontal'}
          vectorSize={18}
          vectorColor={Color.dimGray}
          vectorType={'Entypo'}
        />
        <Button
          btnTxt={'Edit public details'}
          txtStyle={styles.txtBlue}
          btnStyle={styles.btnTxt}
          onPress={() => {}}
        />
        <View style={styles.separator} />
        <View style={[styles.rowContainer, styles.findFriendContainer]}>
          <View>
            <Text style={[styles.headersTxt, styles.txtFriend]}>friends</Text>
            <Text style={[styles.generalTxt, styles.txtFriendsCount]}>
              {profile.friendsCount}{' '}
              <Text style={styles.generalTxt}>friends</Text>
            </Text>
          </View>
          <Text style={styles.txtBlue}>Find friends</Text>
        </View>
        <FlatList
          data={profile.friendsList.slice(0, 6)}
          style={styles.flFriends}
          scrollEnabled={false}
          numColumns={3}
          renderItem={({item}: {item: FriendsData}) => {
            return <FriendsGridItem item={item} />;
          }}
        />
        <Button
          btnTxt={'See all friends'}
          txtStyle={styles.txtBlack}
          btnStyle={[styles.btnTxt, styles.btnSeeAllFriends]}
          onPress={() => {}}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
