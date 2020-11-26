import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import WelcomeScreen from '../screens/WelcomeScreen';
import RegisterScreen from '../screens/RegisterScreen';
import {HOMEPAGE, REGISTER, SIGN_IN} from './WelcomeRouterNames';
import LoginScreen from '../screens/LoginScreen';

const Stack = createStackNavigator();

const WelcomeRouter = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name={HOMEPAGE} component={WelcomeScreen} />
      <Stack.Screen name={REGISTER} component={RegisterScreen} />
      <Stack.Screen name={SIGN_IN} component={LoginScreen} />
    </Stack.Navigator>
  );
};

export default WelcomeRouter;
