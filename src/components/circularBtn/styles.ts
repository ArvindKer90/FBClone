import {StyleSheet} from 'react-native';
import Color from '../../utils/color';
import {horizontalScale, moderateScale} from '../../utils/metrics';
export default StyleSheet.create({
  btn: {
    height: horizontalScale(40),
    width: horizontalScale(40),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.platinum,
    borderRadius: moderateScale(20),
    overflow: 'hidden',
    marginLeft: horizontalScale(12),
    marginRight: horizontalScale(8),
  },
  img: {
    height: horizontalScale(40),
    width: horizontalScale(40),
    borderRadius: moderateScale(20),
    overflow: 'hidden',
  },
  borderImg: {
    height: horizontalScale(32),
    width: horizontalScale(32),
    borderRadius: moderateScale(18),
    overflow: 'hidden',
  },
});
