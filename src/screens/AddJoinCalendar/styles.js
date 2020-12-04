import {StyleSheet} from 'react-native';
import {palette, pxGenerator} from '../../../theme';

export default StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: palette.backgroundDark,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: pxGenerator(3),
    paddingVertical: pxGenerator(3),
  },
});
