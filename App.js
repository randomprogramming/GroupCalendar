import React from 'react';
import {SafeAreaView, View, Text, StatusBar, StyleSheet} from 'react-native';
import {palette} from './theme';

const App = () => {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor={palette.backgroundDark}
      />
      <SafeAreaView style={styles.main}>
        <Text
          style={{
            color: '#fff',
            fontFamily: 'Poppins-SemiBold',
            fontSize: 20,
          }}>
          Lorem Ipsum Dolor Amet
        </Text>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: palette.backgroundDark,
  },
});

export default App;
