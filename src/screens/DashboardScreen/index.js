import React, {useEffect, useState} from 'react';
import {View, ScrollView, Image, RefreshControl} from 'react-native';
import {useSelector} from 'react-redux';
import Typography from '../../components/Typography';
import styles from './styles';
import Header from '../../components/Header';
import Axios from 'axios';
import {JOINED_CALENDARS} from '../../../apiLinks';
import CalendarImage from '../../../static/images/calendar.png';
import {TouchableOpacity} from 'react-native-gesture-handler';

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

  const getDifferenceInDates = (date) => {
    let today = new Date();
    let wantedDate = new Date(date);

    return Math.floor((today - wantedDate) / (1000 * 60));
  };

  const renderJoinedCalendars = () => {
    return joinedCalendars.map((calendar) => (
      <TouchableOpacity
        key={calendar._id}
        style={{
          borderRadius: 16,
          borderColor: '#5c5b66',
          borderWidth: 1,
          overflow: 'hidden',
          marginTop: 16,
        }}>
        <View
          style={{
            height: 150,
            backgroundColor: '#3a1326',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            source={CalendarImage}
            style={{height: 120, width: 120 * 1.614}}
          />
        </View>
        <View style={{flex: 1, padding: 8, backgroundColor: '#1e1c24'}}>
          <Typography variant="h2">{calendar.title}</Typography>
          <Typography>{`Last Edited: ${getDifferenceInDates(
            calendar.updatedAt,
          )} minute(s) ago`}</Typography>
          <Typography>Last Edited by: Name Lastname</Typography>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View
              style={{
                height: 12,
                width: 12,
                borderRadius: 12,
                backgroundColor: '#FFAB48',
                marginTop: -4,
              }}
            />
            <View style={{marginLeft: 4}}>
              <Typography color="#FFAB48">2 events today</Typography>
            </View>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View
              style={{
                height: 12,
                width: 12,
                borderRadius: 12,
                backgroundColor: '#FB3737',
                marginTop: -4,
              }}
            />
            <View style={{marginLeft: 4}}>
              <Typography color="#FB3737">3 deadlines</Typography>
            </View>
          </View>
        </View>
      </TouchableOpacity>
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
      .catch((err) => console.log('err,', err));
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
