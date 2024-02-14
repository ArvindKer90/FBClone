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
  btnContainer: {
    flexDirection: 'row',
    marginRight: horizontalScale(8),
  },
  btn: {
    height: horizontalScale(36),
    width: horizontalScale(36),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.platinum,
    borderRadius: moderateScale(18),
    overflow: 'hidden',
    marginHorizontal: horizontalScale(4),
  },
  headerTxt: {
    color: Color.ultramarineBlue,
    fontSize: moderateScale(32),
    flex: 1,
    marginLeft: horizontalScale(12),
    fontWeight: '700',
    fontFamily: 'klavika-light',
  },
});
