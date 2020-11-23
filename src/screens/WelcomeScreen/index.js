import React from 'react';
import {View} from 'react-native';
import CustomButton from '../../components/CustomButton';
import Typography from '../../components/Typography';
import styles from './styles';

const WelcomeScreen = () => {
  return (
    <View style={styles.main}>
      <View style={styles.flex}>
        <Typography variant="h2">Hello Group Calendar App</Typography>
      </View>
      <View>
        <CustomButton title="Sign In" />
        <CustomButton title="Register" />
      </View>
    </View>
  );
};
export default WelcomeScreen;
