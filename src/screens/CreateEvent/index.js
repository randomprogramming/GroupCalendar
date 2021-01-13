import React, {useState} from 'react';
import {TextInput, View, ScrollView} from 'react-native';
import {Calendar} from 'react-native-calendars';
import {palette, pxGenerator} from '../../../theme';
import Header from '../../components/Header';
import SwitchButton from '../../components/SwitchButton';
import Typography from '../../components/Typography';
import styles from './styles';

const MONTH_NAMES = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const CreateEvent = () => {
  const [selectedDate, setSelectedDate] = useState(undefined);

  return (
    <>
      <Header title="Create an event" />
      <ScrollView style={styles.main}>
        <TextInput
          placeholder="Title"
          style={styles.titleTextInput}
          placeholderTextColor={palette.grayAccent}
          selectionColor={palette.accent}
        />
        <View>
          <Typography variant="h4">Event Type</Typography>
          <Typography>types</Typography>
        </View>
        <Typography variant="h4">Date</Typography>
        <Calendar
          enableSwipeMonths
          style={{
            borderRadius: pxGenerator(3),
            overflow: 'hidden',
            borderColor: palette.grayAccent,
            borderWidth: 1,
          }}
          onDayPress={(day) => setSelectedDate(day.dateString)}
          markedDates={{
            [selectedDate]: {selected: true},
          }}
          theme={{
            textDayFontFamily: 'Poppins-Medium',
            selectedDayTextColor: palette.backgroundGray,
            selectedDayBackgroundColor: palette.white,
            textDayFontSize: 14,
            calendarBackground: palette.backgroundGray,
            textSectionTitleColor: palette.grayAccent,
            dayTextColor: palette.white,
            textDisabledColor: palette.grayAccent,
            todayTextColor: palette.accent,
            textDayHeaderFontFamily: 'Poppins-Medium',
            arrowColor: palette.accent,
            'stylesheet.calendar.header': {
              monthText: {
                fontSize: 16,
                fontFamily: 'Poppins-SemiBold',
                color: palette.white,
                margin: 10,
              },
            },
          }}
        />
        <View style={styles.flexRow}>
          <View style={styles.timeSelect}>
            <Typography variant="h4">Starts</Typography>
            <View style={styles.flexRow}>
              <View style={{flex: 3}}>
                <TextInput style={styles.timeInput} keyboardType="numeric" />
              </View>
              <View style={{flex: 2}}>
                <SwitchButton />
              </View>
            </View>
          </View>
          <View style={styles.timeSelect}>
            <Typography variant="h4">Ends</Typography>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default CreateEvent;
