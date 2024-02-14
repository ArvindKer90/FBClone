import {StyleSheet} from 'react-native';
import Color from '../../utils/color';
import {horizontalScale, verticalScale} from '../../utils/metrics';

export default StyleSheet.create({
  container: {
    height: verticalScale(261),
    width: '100%',
  },
  coverImgContainer: {
    height: verticalScale(220),
    width: '100%',
    backgroundColor: 'gray',
    justifyContent: 'flex-end',
  },
  profileImgContainer: {
    height: horizontalScale(180),
    width: horizontalScale(180),
    borderRadius: horizontalScale(90),
    position: 'absolute',
    backgroundColor: Color.dimGray,
    bottom: 0,
    marginLeft: horizontalScale(8),
    justifyContent: 'flex-end',
  },
  cameraBtn: {
    height: horizontalScale(36),
    width: horizontalScale(36),
    borderRadius: horizontalScale(36),
    backgroundColor: Color.platinum,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: Color.white,
    alignSelf: 'flex-end',
    marginBottom: verticalScale(12),
    marginRight: horizontalScale(12),
  },
  img: {
    height: '100%',
    width: '100%',
    position: 'absolute',
  },
  profileImg: {
    borderRadius: horizontalScale(90),
  },
});
