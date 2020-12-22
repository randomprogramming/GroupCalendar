import React, {useEffect, useState} from 'react';
import {View, ScrollView, RefreshControl} from 'react-native';
import {useSelector} from 'react-redux';
import Typography from '../../components/Typography';
import styles from './styles';
import Header from '../../components/Header';
import Axios from 'axios';
import {JOINED_CALENDARS} from '../../../apiLinks';
import CalendarImage from '../../../static/images/calendar.png';
import CalendarContainer from './CalendarContainer';

const DashboardScreen = ({navigation}) => {
  const token = useSelector((state) => state.tokenReducer.token);
  const firstName = useSelector((state) => state.accountReducer.firstName);

  const [isRefreshing, setIsRefreshing] = useState(false);

  const [joinedCalendars, setJoinedCalendars] = useState([
    {
      _id: '',
      createdAt: '',
      joinId: '',
      joinPassword: '',
      members: [],
      owner: '',
      title: '',
      updatedAt: '',
    },
  ]);

  const renderJoinedCalendars = () => {
    return joinedCalendars.map((calendar) => (
      <CalendarContainer
        key={calendar._id}
        _id={calendar._id}
        title={calendar.title}
        updatedAt={calendar.updatedAt}
        image={CalendarImage}
        navigate={navigation.navigate}
      />
    ));
  };

  const refreshCalendars = () => {
    Axios({
      method: 'GET',
      url: JOINED_CALENDARS,
      headers: {
        authorization: token,
      },
    })
      .then((res) => setJoinedCalendars(res.data.joinedCalendars))
      .catch((err) =>
        console.log('Error when fetching joined calendars: ', err),
      );
  };

  useEffect(() => {
    refreshCalendars();
  }, []);

  return (
    <>
      <Header navigate={navigation.navigate} />
      <ScrollView
        style={styles.main}
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={refreshCalendars}
          />
        }>
        <View style={styles.contentContainer}>
          <Typography variant="h3">Hey {firstName}</Typography>
          <Typography>Here are the calendars You've joined</Typography>
          {renderJoinedCalendars()}
        </View>
      </ScrollView>
    </>
  );
};

export default DashboardScreen;
