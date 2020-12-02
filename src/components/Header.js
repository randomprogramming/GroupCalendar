import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import {palette} from '../../theme';
import Typography from './Typography';

import Icon from 'react-native-vector-icons/Ionicons';

const Header = () => {
  return (
    <View style={styles.main}>
      {/* Override the default statusbar */}
      <StatusBar
        barStyle="light-content"
        backgroundColor={palette.backgroundGray}
      />
      <View style={styles.sideItem}>
        <Typography>test</Typography>
      </View>
      <View style={styles.flex}>
        <Typography variant="title">Calendars</Typography>
      </View>
      <View style={styles.sideItem}>
        <Icon.Button
          name="ios-add"
          color={palette.white}
          backgroundColor="transparent"
          size={26}
          onPress={() => console.log('add')}
          underlayColor="transparent"
        />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    backgroundColor: palette.backgroundGray,
    height: 42,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: palette.grayAccent,
  },
  // Set a fixed width on side items to keep the title centered
  sideItem: {
    width: 54,
  },
  flex: {
    flex: 1,
    alignItems: 'center',
  },
});
