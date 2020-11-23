import {StyleSheet} from 'react-native';
import {palette, pxGenerator} from '../../../theme';

export default StyleSheet.create({
  flex: {
    flex: 1,
  },
  main: {
    backgroundColor: palette.backgroundDark,
    flex: 1,
    paddingHorizontal: pxGenerator(10),
    paddingVertical: pxGenerator(10),
  },
});
