// import React from 'react'
import {StyleSheet} from 'react-native';
import {palette, pxGenerator} from '../../../theme';
import {Dimensions} from 'react-native';

export default StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: palette.backgroundDark,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  newEventButton: {
    width: Dimensions.get('window').width - 2 * pxGenerator(3),
    margin: pxGenerator(3),
    zIndex: 10,
  },
});
