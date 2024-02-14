import {StyleSheet} from 'react-native';
import Color from '../../utils/color';
import {verticalScale, moderateScale} from '../../utils/metrics';
export default StyleSheet.create({
  safeAreaView: {
    flexDirection: 'row',
    backgroundColor: Color.white,
  },
  btn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.white,
  },
  spaceView: {
    height: verticalScale(4),
    width: '100%',
    marginBottom: verticalScale(8),
  },
  txt: {
    fontSize: moderateScale(10),
    marginTop: verticalScale(5),
  },
});
