import React from 'react';
import {StyleSheet, TouchableOpacity, View, Image} from 'react-native';
import {palette, pxGenerator} from '../../../theme';
import Typography from '../../components/Typography';
import {OPEN_CALENDAR_SCREEN} from '../../routes/LoggedInRouter/names';

const CalendarContainer = ({
  _id,
  title,
  updatedAt,
  image: CalendarImage,
  navigate,
}) => {
  const getDifferenceInDates = (date) => {
    let today = new Date();
    let wantedDate = new Date(date);

    return Math.floor((today - wantedDate) / (1000 * 60));
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        navigate(OPEN_CALENDAR_SCREEN, {
          _id,
        })
      }>
      <View style={styles.imageContainer}>
        <Image source={CalendarImage} style={styles.image} />
      </View>
      <View style={styles.contentContainer}>
        <Typography variant="h2">{title}</Typography>
        <Typography>{`Last Edited: ${getDifferenceInDates(
          updatedAt,
        )} minute(s) ago`}</Typography>
        <Typography>Last Edited by: Name Lastname</Typography>
        {/* TODO: Fix this, it's all temporary for now
        This code handles the events, deadlines, classes and different
        colors for each type of element */}
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
  );
};

export default CalendarContainer;

const styles = StyleSheet.create({
  container: {
    borderRadius: pxGenerator(3),
    borderColor: palette.grayAccent,
    borderWidth: 1,
    overflow: 'hidden',
    marginTop: pxGenerator(4),
  },
  // TODO: Do something about the images not sure what yet
  imageContainer: {
    height: 150,
    backgroundColor: '#3a1326',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 120,
    width: 120 * 1.614,
  },
  contentContainer: {
    flex: 1,
    padding: 8,
    backgroundColor: palette.backgroundGray,
  },
});
