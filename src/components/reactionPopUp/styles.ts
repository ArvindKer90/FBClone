import {StyleSheet} from 'react-native';
import Color from '../../utils/color';
import {
  horizontalScale,
  verticalScale,
  moderateScale,
} from '../../utils/metrics';
export default StyleSheet.create({
  container: {
    height: verticalScale(184),
    width: horizontalScale(103),
    backgroundColor: Color.ghostWhite,
    marginHorizontal: horizontalScale(3),
    borderRadius: moderateScale(12),
    justifyContent: 'space-between',
    overflow: 'hidden',
  },
});
