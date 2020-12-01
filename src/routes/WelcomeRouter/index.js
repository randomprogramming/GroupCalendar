import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import WelcomeScreen from '../../screens/WelcomeScreen';
import RegisterScreen from '../../screens/RegisterScreen';
import {HOMEPAGE_SCREEN, REGISTER_SCREEN, SIGN_IN_SCREEN} from './names';
import LoginScreen from '../../screens/LoginScreen';

const Stack = createStackNavigator();

const WelcomeRouter = () => {
  return (
    <Stack.Navigator headerMode="none" initialRouteName={HOMEPAGE_SCREEN}>
      <Stack.Screen name={HOMEPAGE_SCREEN} component={WelcomeScreen} />
      <Stack.Screen name={REGISTER_SCREEN} component={RegisterScreen} />
      <Stack.Screen name={SIGN_IN_SCREEN} component={LoginScreen} />
    </Stack.Navigator>
  );
};

export default WelcomeRouter;
