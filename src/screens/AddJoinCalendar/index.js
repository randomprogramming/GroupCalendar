import React from 'react';
import {View} from 'react-native';
import Typography from '../../components/Typography';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ScrollView} from 'react-native-gesture-handler';
import {TouchableOpacity} from 'react-native';
import styles from './styles';
import Header from '../../components/Header';

// This entire component is written badly
// .. which is why everything is in one file and not organized

// TODO: Rewrite this

const Tab = createBottomTabNavigator();

const JOIN_CALENDAR_SCREEN = 'JOIN_CALENDAR_SCREEN';
const CREATE_CALENDAR_SCREEN = 'CREATE_CALENDAR_SCREEN';

const TabNavigator = ({
  routeName,
  firstScreenName,
  secondScreenName,
  navigate,
  firstScreenButtonTitle,
  secondScreenButtonTitle,
}) => {
  return (
    <View style={{marginVertical: 30}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          backgroundColor: '#3A3840',
          marginHorizontal: 20,
          borderRadius: 12,
        }}>
        <TouchableOpacity
          style={{
            flex: 1,
            borderRadius: 12,
            backgroundColor:
              routeName === firstScreenName ? '#3A3840' : 'white',
            paddingVertical: 16,
            alignItems: 'center',
          }}
          disabled={routeName === secondScreenName}
          onPress={() => navigate(secondScreenName)}>
          <Typography
            darkText={routeName === secondScreenName}
            fontWeight={600}>
            {firstScreenButtonTitle}
          </Typography>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flex: 1,
            borderRadius: 12,
            backgroundColor:
              routeName === secondScreenName ? '#3A3840' : 'white',
            paddingVertical: 16,
            alignItems: 'center',
          }}
          disabled={routeName === firstScreenName}
          onPress={() => navigate(firstScreenName)}>
          <Typography darkText={routeName === firstScreenName} fontWeight={600}>
            {secondScreenButtonTitle}
          </Typography>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const JoinCalendarScreen = ({navigation, route}) => {
  return (
    <View style={styles.main}>
      <View style={{flex: 1}}>
        <Typography>Create</Typography>
      </View>
      <TabNavigator
        firstScreenName={JOIN_CALENDAR_SCREEN}
        secondScreenName={CREATE_CALENDAR_SCREEN}
        firstScreenButtonTitle="Join Calendar"
        secondScreenButtonTitle="Create Calendar"
        routeName={route.name}
        navigate={navigation.navigate}
      />
    </View>
  );
};

const CreateCalendarScreen = ({navigation, route}) => {
  return (
    <View style={styles.main}>
      <View style={{flex: 1}}>
        <Typography>Join</Typography>
      </View>
      <TabNavigator
        firstScreenName={JOIN_CALENDAR_SCREEN}
        secondScreenName={CREATE_CALENDAR_SCREEN}
        firstScreenButtonTitle="Join Calendar"
        secondScreenButtonTitle="Create Calendar"
        routeName={route.name}
        navigate={navigation.navigate}
      />
    </View>
  );
};

const AddJoinCalendar = () => {
  return (
    <Tab.Navigator screenOptions={{tabBarVisible: false}}>
      <Tab.Screen
        name={CREATE_CALENDAR_SCREEN}
        component={CreateCalendarScreen}
      />
      <Tab.Screen name={JOIN_CALENDAR_SCREEN} component={JoinCalendarScreen} />
    </Tab.Navigator>
  );
};

export default AddJoinCalendar;
