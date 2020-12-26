import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Typography from '../../components/Typography';
import CalendarStrip from 'react-native-calendar-strip';

const DaySelector = () => {
  return (
    <View>
      <CalendarStrip
        scrollable
        style={{height: 100, paddingHorizontal: 8}}
        calendarHeaderStyle={{color: 'white'}}
        dateNumberStyle={{color: 'white'}}
        dateNameStyle={{color: 'white'}}
        iconStyle={{display: 'none'}}
        calendarHeaderPosition="below"
        onDateSelected={(date) => console.log(date)}
      />
    </View>
  );
};

export default DaySelector;

const styles = StyleSheet.create({});
