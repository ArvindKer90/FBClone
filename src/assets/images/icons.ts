import {SvgProps} from 'react-native-svg';
import ImageIcon from './image_icon.svg';

export interface Icons {
  ImageIcon: React.FC<SvgProps>;
}
const Icons: Icons = {
  ImageIcon: ImageIcon,
};

export default Icons;
