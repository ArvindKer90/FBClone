import {StyleSheet, Dimensions} from 'react-native';
import Color from '../../utils/color';
import {verticalScale, moderateScale} from '../../utils/metrics';

const {width} = Dimensions.get('window');
const imageSizeFirstRow = (width - 24) / 2; // Assuming 2 columns in the second row
const imageSize = (width - 24) / 3; // Assuming 3 columns in the second row

export default StyleSheet.create({
  container: {
    padding: moderateScale(8),
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: verticalScale(4),
  },
  firstRowImages: {
    width: imageSizeFirstRow,
    height: imageSizeFirstRow,
    borderRadius: moderateScale(8),
  },
  image: {
    width: imageSize,
    height: imageSize,
    borderRadius: moderateScale(8),
  },
  remaining: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Color.clearBlack,
    borderRadius: moderateScale(8),
    position: 'absolute',
    height: '100%',
    width: '100%',
  },
  remainingText: {
    color: 'white',
    padding: moderateScale(4),
  },
});
