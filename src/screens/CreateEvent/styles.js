import {StyleSheet} from 'react-native';
import {palette, pxGenerator} from '../../../theme';

export default StyleSheet.create({
  main: {
    backgroundColor: palette.backgroundDark,
    flex: 1,
    paddingHorizontal: pxGenerator(5),
  },
  flexRow: {
    flexDirection: 'row',
  },
  timeSelect: {
    flex: 1,
  },
  timeInput: {
    textAlign: 'right',
    backgroundColor: palette.backgroundGray,
    borderRadius: pxGenerator(3),
    borderColor: palette.grayAccent,
    borderWidth: 1,
    fontFamily: 'Poppins-Medium',
    color: palette.white,
    marginHorizontal: pxGenerator(4),
    paddingHorizontal: 12,
    paddingVertical: 8,
    fontSize: 16,
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
