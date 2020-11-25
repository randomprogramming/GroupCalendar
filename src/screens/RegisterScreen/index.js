import React from 'react';
import {View} from 'react-native';
import CustomTextInput from '../../components/CustomTextInput';
import Typography from '../../components/Typography';
import {SIGN_IN} from '../../routes/WelcomeRouterNames';
import styles from './styles';
import Link from '../../components/Link';
import CustomButton from '../../components/CustomButton';

const RegisterScreen = ({navigation}) => {
  return (
    <View style={styles.main}>
      <Typography variant="h2">Create a new account</Typography>
      <Typography>
        You will need an account to connect with Your colleagues or classmates
        and share calendars.
      </Typography>
      <CustomTextInput placeholder="First Name" autoCapitalize="words" />
      <CustomTextInput placeholder="Last Name" autoCapitalize="words" />
      <CustomTextInput
        placeholder="Email Name"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      {/* TODO: Fix this font here
      When secureTextEntry is true, the font defaults to Roboto
      Fix: Conditionally change the font if the field is empty or not */}
      <CustomTextInput placeholder="Password" secureTextEntry />
      <CustomTextInput placeholder="Confirm Password" secureTextEntry />

      <View style={styles.linkContainer}>
        <Typography>Already have an account? </Typography>
        <Link onPress={() => console.log('dsa')}>Log in here</Link>
      </View>

      <CustomButton title="Create Account" />
    </View>
  );
};

export default RegisterScreen;
