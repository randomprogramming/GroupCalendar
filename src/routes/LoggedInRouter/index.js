import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import AddJoinCalendar from '../../screens/AddJoinCalendar';
import CreateEvent from '../../screens/CreateEvent';
import DashboardScreen from '../../screens/DashboardScreen';
import OpenCalendarScreen from '../../screens/OpenCalendarScreen';
import {
  ADD_JOIN_CALENDAR_SCREEN,
  CREATE_EVENT_SCREEN,
  DASHBOARD_SCREEN,
  OPEN_CALENDAR_SCREEN,
} from './names';

const Stack = createStackNavigator();

const WelcomeRouter = () => {
  return (
    <Stack.Navigator headerMode="none" initialRouteName={DASHBOARD_SCREEN}>
      <Stack.Screen name={DASHBOARD_SCREEN} component={DashboardScreen} />
      <Stack.Screen
        name={ADD_JOIN_CALENDAR_SCREEN}
        component={AddJoinCalendar}
      />
      <Stack.Screen
        name={OPEN_CALENDAR_SCREEN}
        component={OpenCalendarScreen}
      />
      <Stack.Screen name={CREATE_EVENT_SCREEN} component={CreateEvent} />
    </Stack.Navigator>
  );
};

export default WelcomeRouter;
