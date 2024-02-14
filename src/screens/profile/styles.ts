import {StyleSheet} from 'react-native';
import Color from '../../utils/color';
import {
  horizontalScale,
  verticalScale,
  moderateScale,
} from '../../utils/metrics';
export default StyleSheet.create({
  container: {
    backgroundColor: Color.white,
    alignItems: 'center',
    width: '100%',
    flex: 1,
  },
  txt: {
    color: '#fff',
    fontSize: 35,
    fontFamily: 'Verdana',
  },
  scrollview: {
    width: '100%',
  },
  profileName: {
    fontSize: moderateScale(20),
    fontWeight: '700',
    marginLeft: horizontalScale(16),
    marginTop: verticalScale(20),
    color: Color.vampireBlack,
  },
  headersTxt: {
    fontSize: moderateScale(16),
    fontWeight: '600',
    marginLeft: horizontalScale(16),
    color: Color.vampireBlack,
    marginTop: verticalScale(16),
  },
  subHeadersTxt: {
    fontSize: moderateScale(16),
    fontWeight: '500',
    marginLeft: horizontalScale(16),
    color: Color.dimGray,
    // marginTop: verticalScale(16),
  },
  generalTxt: {
    fontSize: moderateScale(14),
    color: Color.dimGray,
  },
  rowContainer: {
    flexDirection: 'row',
    marginHorizontal: horizontalScale(16),
    marginTop: verticalScale(20),
  },
  addStoryBtn: {
    flex: 1,
    flexDirection: 'row',
    marginRight: 8,
    marginHorizontal: 0,
    backgroundColor: Color.ultramarineBlue,
    borderRadius: horizontalScale(6),
  },
  addStorytxt: {
    color: Color.white,
    fontSize: moderateScale(16),
    marginLeft: horizontalScale(6),
  },
  editProfileBtn: {
    flex: 1,
    flexDirection: 'row',
    marginRight: 8,
    marginHorizontal: 0,
    backgroundColor: Color.platinum,
    borderRadius: horizontalScale(6),
  },
  editProfileTxt: {
    color: Color.vampireBlack,
    fontSize: moderateScale(16),
    marginLeft: horizontalScale(6),
  },
  menuBtn: {
    width: horizontalScale(48),
    height: verticalScale(40),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.platinum,
    borderRadius: horizontalScale(6),
    marginHorizontal: 0,
  },
  separator: {
    flex: 1,
    backgroundColor: Color.platinum,
    height: 1,
    marginHorizontal: horizontalScale(16),
    marginTop: verticalScale(20),
  },
  followerCountContainer: {
    marginLeft: horizontalScale(16),
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
  followerCountTxt: {
    marginLeft: horizontalScale(6),
  },
  btnAboutInfo: {
    marginLeft: horizontalScale(16),
    flexDirection: 'row',
    width: '50%',
    justifyContent: 'flex-start',
  },
  aboutInfoTxt: {
    marginLeft: horizontalScale(10),
  },
  btnTxt: {
    flex: 1,
    height: 36,
    marginHorizontal: horizontalScale(16),
    backgroundColor: Color.cyanBlue,
    borderRadius: moderateScale(6),
    marginTop: verticalScale(4),
  },
  txtBlue: {
    color: Color.ultramarineBlue,
  },
  findFriendContainer: {
    justifyContent: 'space-between',
  },
  txtFriend: {
    marginLeft: 0,
    marginTop: 0,
  },
  txtFriendsCount: {
    marginTop: verticalScale(4),
  },
  btnSeeAllFriends: {
    backgroundColor: Color.platinum,
    marginBottom: verticalScale(20),
  },
  txtBlack: {
    color: Color.vampireBlack,
  },
  flFriends: {
    flex: 1,
    marginHorizontal: horizontalScale(10),
    marginVertical: verticalScale(20),
  },
});
