import {StyleSheet} from 'react-native';
import {palette, pxGenerator} from '../../../theme';

export default StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: palette.backgroundDark,
  },
  contentContainer: {
    marginTop: pxGenerator(5),
    paddingHorizontal: pxGenerator(5),
  },
});
