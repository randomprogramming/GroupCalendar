import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import {palette} from '../../theme';
import Typography from './Typography';
import Icon from 'react-native-vector-icons/Ionicons';
import {ADD_JOIN_CALENDAR_SCREEN} from '../routes/LoggedInRouter/names';

const Header = ({navigate, title, children}) => {
  return (
    <View style={styles.main}>
      {/* Override the default statusbar */}
      <StatusBar
        barStyle="light-content"
        backgroundColor={palette.backgroundGray}
      />
      <View style={styles.upperHeader}>
        <View style={styles.sideItem}>{/* <Typography></Typography> */}</View>
        <View style={styles.flex}>
          <Typography variant="title">{title}</Typography>
        </View>
        <View style={styles.sideItem}>
          {/* <Icon.Button
          name="ios-add"
          color={palette.white}
          backgroundColor="transparent"
          size={26}
          onPress={() => navigate(ADD_JOIN_CALENDAR_SCREEN)}
          underlayColor="transparent"
        /> */}
        </View>
      </View>
      <View>{children}</View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  main: {
    flexDirection: 'column',
    backgroundColor: palette.backgroundGray,
    borderBottomWidth: 1,
    borderBottomColor: palette.grayAccent,
  },
  upperHeader: {
    flexDirection: 'row',
    height: 42,
    justifyContent: 'center',
    alignItems: 'center',
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
