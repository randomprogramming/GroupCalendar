import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import WelcomeScreen from '../screens/WelcomeScreen';

const Stack = createStackNavigator();

const WelcomeRouter = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Home" component={WelcomeScreen} />
    </Stack.Navigator>
  );
};

export default WelcomeRouter;
