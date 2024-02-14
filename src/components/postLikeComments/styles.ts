import {StyleSheet} from 'react-native';
import Color from '../../utils/color';
import {
  horizontalScale,
  verticalScale,
  // moderateScale,
} from '../../utils/metrics';
export default StyleSheet.create({
  container: {
    height: verticalScale(80),
    width: '100%',
    backgroundColor: Color.ghostWhite,
    marginHorizontal: horizontalScale(3),
    justifyContent: 'space-between',
  },
  subContainer1: {
    flex: 1,
  },
  subContainer2: {
    flex: 1,
  },
});
