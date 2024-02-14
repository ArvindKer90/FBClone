import {StyleSheet} from 'react-native';
import Color from '../../utils/color';
import {
  verticalScale,
  horizontalScale,
  moderateScale,
} from '../../utils/metrics';
export default StyleSheet.create({
  container: {
    width: '100%',
    // backgroundColor: '#bbb',
    marginVertical: 5,
  },
  headerContainer: {
    height: verticalScale(64),
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  btn: {
    height: horizontalScale(40),
    width: horizontalScale(40),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.platinum,
    borderRadius: moderateScale(20),
    overflow: 'hidden',
    marginLeft: horizontalScale(12),
    marginRight: horizontalScale(10),
  },
  img: {
    height: horizontalScale(40),
    width: horizontalScale(40),
    borderRadius: moderateScale(20),
    overflow: 'hidden',
  },
  imgButton: {
    alignItems: 'center',
    justifyContent: 'center',
    height: horizontalScale(40),
    width: horizontalScale(40),
    borderRadius: horizontalScale(20),
    // backgroundColor: 'blue'
  },
  postDetailContainer: {
    height: 40,
    justifyContent: 'space-around',
    flex: 1,
    marginRight: 10,
  },
  nameTxt: {
    fontWeight: '600',
    color: Color.vampireBlack,
  },
  sharedPostTxt: {
    fontWeight: '400',
    color: Color.vampireBlack,
  },
  dateTxt: {
    flexDirection: 'row',
    height: 20,
    alignItems: 'center',
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  captionTxt: {
    fontWeight: '400',
    color: Color.vampireBlack,
    marginHorizontal: 12,
    marginBottom: 8,
  },
});
