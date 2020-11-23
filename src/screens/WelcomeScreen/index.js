import React from 'react';
import {Text, View} from 'react-native';
import CustomButton from '../../components/CustomButton';
import styles from './styles';

const WelcomeScreen = () => {
  return (
    <View style={styles.main}>
      <View style={styles.flex}>
        <Text>Group Calendar App</Text>
      </View>
      <View>
        <CustomButton title="Sign In" />
        <CustomButton title="Register" />
      </View>
    </View>
  );
};
export default WelcomeScreen;
