import React from 'react';
import {View, ScrollView} from 'react-native';
import {useSelector} from 'react-redux';
import Typography from '../../components/Typography';
import styles from './styles';

const DashboardScreen = () => {
  const firstName = useSelector((state) => state.accountReducer.firstName);

  return (
    <ScrollView style={styles.main}>
      <View style={styles.contentContainer}>
        <Typography variant="h2">Hey {firstName}</Typography>
        <Typography>Here are the calendars You've joined</Typography>
      </View>
    </ScrollView>
  );
};

export default DashboardScreen;
