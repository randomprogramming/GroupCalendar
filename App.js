import React, {useEffect} from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {palette} from './theme';
import WelcomeRouter from './src/routes/WelcomeRouter';
import LoggedInRouter from './src/routes/LoggedInRouter';
import {useSelector, useDispatch} from 'react-redux';
import {checkKeychainForToken} from './src/actions/tokenActions';

const App = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.accountReducer.isLoggedIn);

  useEffect(() => {
    // Fetch the account whenever the app is open
    dispatch(checkKeychainForToken());
    //eslint-disable-next-line
  }, []);

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
