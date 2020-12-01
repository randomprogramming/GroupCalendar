import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {palette} from './theme';
import WelcomeRouter from './src/routes/WelcomeRouter';
import LoggedInRouter from './src/routes/LoggedInRouter';
import {useSelector} from 'react-redux';

const App = () => {
  const isLoggedIn = useSelector((state) => state.accountReducer.isLoggedIn);

  return (
    <NavigationContainer>
      <StatusBar
        barStyle="light-content"
        backgroundColor={palette.backgroundDark}
      />
      <SafeAreaView style={styles.main}>
        {isLoggedIn ? <LoggedInRouter /> : <WelcomeRouter />}
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
