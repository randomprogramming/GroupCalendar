import React from 'react';
import {View, ScrollView, Button} from 'react-native';
import {useSelector} from 'react-redux';
import Typography from '../../components/Typography';
import styles from './styles';
import Header from '../../components/Header';

const DashboardScreen = ({navigation}) => {
  const firstName = useSelector((state) => state.accountReducer.firstName);

  return (
    <>
      <Header navigate={navigation.navigate} />
      <ScrollView style={styles.main}>
        <View style={styles.contentContainer}>
          <Typography variant="h2">Hey {firstName}</Typography>
          <Typography>Here are the calendars You've joined</Typography>
        </View>
      </ScrollView>
    </>
  );
};

export default DashboardScreen;
