import {StyleSheet} from 'react-native';
import {palette, pxGenerator} from '../../../theme';

const IMAGE_SIZE = 250;
const IMAGE_ASPECT_RATIO = 1.2268;

export default StyleSheet.create({
  flex: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  main: {
    backgroundColor: palette.backgroundDark,
    flex: 1,
    paddingHorizontal: pxGenerator(10),
    paddingVertical: pxGenerator(10),
  },
  image: {
    height: IMAGE_SIZE,
    width: IMAGE_SIZE * IMAGE_ASPECT_RATIO,
    borderRadius: pxGenerator(4),
  },
});
