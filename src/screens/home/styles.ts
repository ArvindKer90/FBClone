import {StyleSheet} from 'react-native';
import Color from '../../utils/color';
import {
  // horizontalScale,
  verticalScale,
  // moderateScale,
} from '../../utils/metrics';
export default StyleSheet.create({
  container: {
    backgroundColor: Color.white,
    flex: 1,
  },
  storiesCollection: {
    height: verticalScale(224),
    width: '100%',
  },
  separator: {
    height: verticalScale(8),
    backgroundColor: Color.silver,
  },
  separatorBottomMargin: {
    marginBottom: verticalScale(12),
  },
  separatorTopMargin: {
    marginTop: verticalScale(12),
  },
  flSty: {
    flex: 1,
    marginVertical: verticalScale(12),
  },
  contentContainer: {
    alignItems: 'center',
    marginLeft: 9,
  },
  flFeeds: {
    width: '100%',
    flex: 1,
  },
});
