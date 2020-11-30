import {StyleSheet} from 'react-native';
import {palette, pxGenerator} from '../../../theme';

export default StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: palette.backgroundDark,
  },
  flexGrow: {
    flexGrow: 1,
  },
  contentContainer: {
    paddingHorizontal: pxGenerator(5),
    paddingVertical: pxGenerator(5),
    flex: 1,
  },
  linkContainer: {
    flexDirection: 'row',
    marginTop: pxGenerator(3),
    marginBottom: pxGenerator(5),
  },
});
