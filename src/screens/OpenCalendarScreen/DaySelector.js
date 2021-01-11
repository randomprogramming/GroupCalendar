import React, {useState, useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {palette, pxGenerator} from '../../../theme';
import CalendarStrip from 'react-native-calendar-strip';
import moment from 'moment';

const momentDateFormat = 'D MMMM YYYY';
const fontName = 'Poppins-Medium';
// TODO: Remove this once the bug gets fixed with wrong timezones
const start = moment();
start.set({hour: 12});

const DaySelector = () => {
  const [headerText, setHeaderText] = useState('');

  const updateHeaderText = (date) => {
    // use the moment library to format and update the header text
    setHeaderText(date.format(momentDateFormat));
  };

  const handleDateSelect = (date) => {
    updateHeaderText(date);
  };

  useEffect(() => {
    updateHeaderText(start);
  }, []);

  return (
    // TODO: extract the styles
    <CalendarStrip
      startingDate={start}
      selectedDate={start}
      scrollable
      style={{
        height: 90,
        paddingHorizontal: pxGenerator(2),
        paddingVertical: pxGenerator(2),
      }}
      iconStyle={{display: 'none'}}
      calendarHeaderStyle={{
        color: palette.white,
        fontFamily: fontName,
      }}
      dateNumberStyle={{
        color: palette.white,
        fontFamily: fontName,
        padding: 6,
        marginBottom: 4,
        width: 34,
        height: 34,
        fontSize: 14,
      }}
      dateNameStyle={{
        color: palette.grayAccent,
        fontFamily: fontName,
      }}
      highlightDateNumberStyle={{
        color: palette.backgroundDark,
        backgroundColor: palette.white,
        fontFamily: fontName,
        padding: 6,
        borderRadius: 8,
        width: 34,
        height: 34,
        marginBottom: 4,
        fontSize: 14,
      }}
      highlightDateNameStyle={{
        color: palette.white,
        fontFamily: fontName,
      }}
      onDateSelected={(date) => handleDateSelect(date)}
      calendarHeaderContainerStyle={{flex: 0}}
      calendarHeaderPosition="below"
      headerText={headerText}
      customDatesStyles={[
        {
          start,
          dateNumberStyle: {
            color: palette.accent,
            fontFamily: fontName,
            padding: 6,
            marginBottom: 4,
            width: 34,
            height: 34,
            fontSize: 14,
          },
          dateNameStyle: {
            color: palette.accent,
            fontFamily: fontName,
          },
        },
      ]}
    />
  );
};

export default DaySelector;

// TODO: Move all inline styles to here
const styles = StyleSheet.create({});
