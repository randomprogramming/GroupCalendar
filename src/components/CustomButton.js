import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {palette, pxGenerator} from '../../theme';

const CustomButton = ({onPress, title}) => {
  return (
    <TouchableOpacity style={styles.main} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
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
  buttonText: {
    fontFamily: 'Poppins-SemiBold',
  },
});
