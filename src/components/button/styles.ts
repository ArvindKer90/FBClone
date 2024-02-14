import {StyleSheet} from 'react-native';
import Color from '../../utils/color';
import {horizontalScale, moderateScale} from '../../utils/metrics';
export default StyleSheet.create({
  btn: {
    height: horizontalScale(40),
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.white,
    borderRadius: moderateScale(12),
    overflow: 'hidden',
    marginHorizontal: horizontalScale(10),
  },
  txt: {
    color: Color.vampireBlack,
    fontSize: moderateScale(14),
    fontWeight: '700',
  },
});
