import {StyleSheet} from 'react-native';
import Color from '../../utils/color';
import {
  horizontalScale,
  verticalScale,
  moderateScale,
} from '../../utils/metrics';
export default StyleSheet.create({
  container: {
    height: verticalScale(170),
    width: '30%',
    backgroundColor: Color.ghostWhite,
    marginHorizontal: '1.65%',
    borderRadius: moderateScale(12),
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: Color.platinum,
    justifyContent: 'space-between',
    marginVertical: '1.65%',
  },
  txtContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  txt: {
    marginHorizontal: horizontalScale(7),
    fontWeight: '600',
    color: Color.vampireBlack,
    fontSize: moderateScale(13),
  },
  bgImg: {
    height: verticalScale(116),
    width: '100%',
  },
});
