import React, {useEffect} from 'react';
import {TextInput, StyleSheet} from 'react-native';
import {palette, pxGenerator} from '../../theme';

const FONT_FAMILY = 'Poppins-SemiBold';

const CustomTextInput = ({
  value,
  onChange,
  placeholder,
  secureTextEntry,
  keyboardType,
  autoCapitalize,
  autoCorrect,
  marginTop,
}) => {
  let ref = React.useRef();

  useEffect(() => {
    // when secureTextEntry is true, changing the font in the style directly does not work, this is a workaround
    if (ref && secureTextEntry) {
      ref.current.setNativeProps({
        style: {fontFamily: FONT_FAMILY},
      });
    }
  }, [ref]);
  return (
    <TextInput
      ref={ref}
      style={
        marginTop
          ? [styles.main, {marginTop: pxGenerator(marginTop)}]
          : styles.main
      }
      value={value}
      onChangeText={(e) => onChange(e)}
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
    fontFamily: FONT_FAMILY,
  },
});
