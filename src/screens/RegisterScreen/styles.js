import {StyleSheet} from 'react-native';
import {palette, pxGenerator} from '../../../theme';

export default StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: palette.backgroundDark,
    paddingHorizontal: pxGenerator(5),
    paddingVertical: pxGenerator(5),
  },
  linkContainer: {
    flexDirection: 'row',
  },
  textFieldsContainer: {
    flex: 1,
    justifyContent: 'space-evenly',
  },
});
