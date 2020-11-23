import React from 'react';
import {SafeAreaView, View, Text, StatusBar, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {palette} from './theme';
import WelcomeRouter from './src/routes/WelcomeRouter';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar
        barStyle="light-content"
        backgroundColor={palette.backgroundDark}
      />
      <SafeAreaView style={styles.main}>
        <WelcomeRouter />
      </SafeAreaView>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: palette.backgroundDark,
  },
});

export default App;
