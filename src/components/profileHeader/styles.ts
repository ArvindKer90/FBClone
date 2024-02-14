import {StyleSheet} from 'react-native';
import Color from '../../utils/color';
import {
  horizontalScale,
  verticalScale,
  moderateScale,
} from '../../utils/metrics';

export default StyleSheet.create({
  container: {
    height: verticalScale(52),
    width: '100%',
    backgroundColor: Color.white,
    flexDirection: 'row',
    alignItems: 'center',
  },
  btn: {
    height: horizontalScale(36),
    width: horizontalScale(36),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: moderateScale(18),
    overflow: 'hidden',
    marginHorizontal: horizontalScale(4),
  },
  backBtn: {
    paddingLeft: horizontalScale(2),
  },
  searchBtn: {
    paddingRight: horizontalScale(3),
  },
  btnTitle: {
    fontSize: moderateScale(16),
    marginHorizontal: horizontalScale(5),
    fontWeight: '600',
  },
  txtBtn: {
    flexDirection: 'row',
    marginHorizontal: horizontalScale(5),
  },
});
