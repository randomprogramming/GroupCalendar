import React, {useEffect, useState} from 'react';
import {View, ScrollView, Button} from 'react-native';
import {useSelector} from 'react-redux';
import Typography from '../../components/Typography';
import styles from './styles';
import Header from '../../components/Header';
import Axios from 'axios';
import {JOINED_CALENDARS} from '../../../apiLinks';

const DashboardScreen = ({navigation}) => {
  const token = useSelector((state) => state.tokenReducer.token);
  const firstName = useSelector((state) => state.accountReducer.firstName);

  const [joinedCalendars, setJoinedCalendars] = useState([]);

  useEffect(() => {
    Axios({
      method: 'GET',
      url: JOINED_CALENDARS,
      headers: {
        authorization: token,
      },
    })
      .then((res) => setJoinedCalendars(res.data.joinedCalendars))
      .catch((err) => console.log('err,', err));
  }, []);

  return (
    <>
      <Header navigate={navigation.navigate} />
      <ScrollView style={styles.main}>
        <View style={styles.contentContainer}>
          <Typography variant="h2">Hey {firstName}</Typography>
          <Typography>Here are the calendars You've joined</Typography>
          {joinedCalendars.map((cal) => (
            <Typography>Hi</Typography>
          ))}
        </View>
      </ScrollView>
    </>
  );
};

export default DashboardScreen;
