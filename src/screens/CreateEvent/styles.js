import {StyleSheet} from 'react-native';
import {palette, pxGenerator} from '../../../theme';

export default StyleSheet.create({
  main: {
    backgroundColor: palette.backgroundDark,
    flex: 1,
    paddingHorizontal: pxGenerator(5),
  },
  titleTextInput: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: palette.white,
    borderBottomWidth: 3,
    marginTop: pxGenerator(4),
    marginBottom: pxGenerator(6),
    borderBottomColor: palette.grayAccent,
    paddingBottom: pxGenerator(1),
  },
});
