import Axios from 'axios';
import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {useSelector} from 'react-redux';
import {GET_CALENDAR} from '../../../apiLinks';
import Header from '../../components/Header';
import Typography from '../../components/Typography';
import DaySelector from './DaySelector';
import styles from './styles';

const OpenCalendarScreen = ({route}) => {
  // Calendar id
  const {_id} = route.params;

  const token = useSelector((state) => state.tokenReducer.token);
  const [activeCalendar, setActiveCalendar] = useState({
    _id: '',
    createdAt: '',
    joinId: '',
    members: [''],
    owner: '',
    title: '',
    updatedAt: '',
  });

  useEffect(() => {
    Axios({
      method: 'GET',
      url: GET_CALENDAR(_id),
      headers: {
        authorization: token,
      },
    })
      .then((res) => setActiveCalendar(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Header title={activeCalendar.title} />
      <View style={styles.main}>
        <DaySelector />
      </View>
    </>
  );
};

export default OpenCalendarScreen;
