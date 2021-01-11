import React from 'react';
import {StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {palette, pxGenerator} from '../../theme';
import Typography from './Typography';

const CustomButton = ({onPress, title, disabled, marginTop, style}) => {
  return (
    <TouchableOpacity
      style={[
        styles.main,
        style,
        // If button is disabled, set some gray color on it
        disabled && {backgroundColor: palette.grayAccent},
        marginTop && {marginTop: pxGenerator(marginTop)},
      ]}
      onPress={onPress}
      disabled={disabled}>
      <Typography darkText fontWeight={600}>
        {title}
      </Typography>
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
