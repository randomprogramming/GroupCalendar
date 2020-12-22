import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import Header from '../../components/Header';
import Typography from '../../components/Typography';
import styles from './styles';

const OpenCalendarScreen = ({route}) => {
  // Calendar id
  const {_id} = route.params;

  const [activeCalendar, setActiveCalendar] = useState({});

  useEffect(() => {
    console.log('nice');
  }, []);

  return (
    <>
      <Header title="Calendar Name Test Length lol" />
      <View style={styles.main}>
        <Typography>Hello world and {_id}</Typography>
      </View>
    </>
  );
};

export default OpenCalendarScreen;
