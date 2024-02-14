import {StyleSheet} from 'react-native';
import Color from '../../utils/color';
import {horizontalScale, verticalScale} from '../../utils/metrics';
export default StyleSheet.create({
  container: {
    height: verticalScale(64),
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  btnContainer: {
    backgroundColor: Color.clear,
    marginLeft: horizontalScale(0),
  },
  btnTitle: {
    alignSelf: 'flex-start',
    fontWeight: '500',
  },
  imgButton: {
    alignItems: 'center',
    justifyContent: 'center',
    height: horizontalScale(40),
    width: horizontalScale(40),
    marginRight: horizontalScale(12),
    borderRadius: horizontalScale(20),
  },
});
