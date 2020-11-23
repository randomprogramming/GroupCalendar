import React from 'react';
import {StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {palette, pxGenerator} from '../../theme';
import Typography from './Typography';

const CustomButton = ({onPress, title}) => {
  return (
    <TouchableOpacity style={styles.main} onPress={onPress}>
      <Typography darkText>{title}</Typography>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  main: {
    backgroundColor: palette.white,
    paddingVertical: pxGenerator(3),
    alignItems: 'center',
    borderRadius: pxGenerator(3),
    marginTop: pxGenerator(3),
  },
});
