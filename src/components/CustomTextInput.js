import React from 'react';
import {TextInput, StyleSheet} from 'react-native';
import {palette, pxGenerator} from '../../theme';

const CustomTextInput = ({
  placeholder,
  secureTextEntry,
  keyboardType,
  autoCapitalize,
  autoCorrect,
}) => {
  return (
    <TextInput
      style={styles.main}
      placeholder={placeholder}
      placeholderTextColor={palette.grayAccent}
      selectionColor={palette.accent}
      secureTextEntry={secureTextEntry}
      keyboardAppearance="dark"
      keyboardType={keyboardType}
      autoCapitalize={autoCapitalize}
      autoCorrect={autoCorrect}
    />
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  main: {
    backgroundColor: palette.backgroundGray,
    borderColor: palette.grayAccent,
    borderWidth: 0.7,
    borderRadius: pxGenerator(3),
    color: palette.white,
    paddingVertical: pxGenerator(3),
    paddingHorizontal: pxGenerator(5),
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
  },
});
