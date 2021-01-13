import React, {useState} from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {palette, pxGenerator} from '../../theme';
import Typography from './Typography';

const LEFT_BUTTON = 'LEFT_BUTTON';
const RIGHT_BUTTON = 'RIGHT_BUTTON';

const GRAY_BACKGROUND_COLOR = palette.backgroundGray;

const SwitchButton = () => {
  const [activeButton, setActiveButton] = useState(LEFT_BUTTON);

  return (
    <View style={styles.main}>
      <TouchableOpacity
        style={[
          styles.button,
          {
            backgroundColor:
              activeButton === LEFT_BUTTON
                ? palette.white
                : GRAY_BACKGROUND_COLOR,
          },
        ]}
        disabled={activeButton === LEFT_BUTTON}
        onPress={() => setActiveButton(LEFT_BUTTON)}>
        <Typography darkText={activeButton === LEFT_BUTTON} fontSize={16}>
          AM
        </Typography>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.button,
          {
            backgroundColor:
              activeButton === RIGHT_BUTTON
                ? palette.white
                : GRAY_BACKGROUND_COLOR,
          },
        ]}
        disabled={activeButton === RIGHT_BUTTON}
        onPress={() => setActiveButton(RIGHT_BUTTON)}>
        <Typography darkText={activeButton === RIGHT_BUTTON} fontSize={16}>
          PM
        </Typography>
      </TouchableOpacity>
    </View>
  );
};

export default SwitchButton;

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: GRAY_BACKGROUND_COLOR,
    borderRadius: pxGenerator(2),
  },
  button: {
    flex: 1,
    borderRadius: pxGenerator(2),
    paddingVertical: pxGenerator(2),
    alignItems: 'center',
  },
});
