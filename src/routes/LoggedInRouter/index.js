import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import DashboardScreen from '../../screens/DashboardScreen';
import {DASHBOARD_SCREEN} from './names';

const Stack = createStackNavigator();

const WelcomeRouter = () => {
  return (
    <Stack.Navigator headerMode="none" initialRouteName={DASHBOARD_SCREEN}>
      <Stack.Screen name={DASHBOARD_SCREEN} component={DashboardScreen} />
    </Stack.Navigator>
  );
};

export default WelcomeRouter;
