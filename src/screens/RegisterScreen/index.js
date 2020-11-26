import React, {useState} from 'react';
import {View} from 'react-native';
import CustomTextInput from '../../components/CustomTextInput';
import Typography from '../../components/Typography';
import {SIGN_IN} from '../../routes/WelcomeRouterNames';
import styles from './styles';
import Link from '../../components/Link';
import CustomButton from '../../components/CustomButton';

const firstName = 'firstName';
const lastName = 'lastName';
const email = 'email';
const password = 'password';
const repeatedPassword = 'repeatedPassword';

const RegisterScreen = ({navigation}) => {
  const [registrationData, setRegistrationData] = useState({
    [firstName]: '',
    [lastName]: '',
    [email]: '',
    [password]: '',
    [repeatedPassword]: '',
  });

  const handleDataChange = (newValue, name) => {
    // newValue is the new value after data changed
    // name is the name of the field that we want to mutate
    setRegistrationData({...registrationData, [name]: newValue});
  };

  return (
    <View style={styles.main}>
      <Typography variant="h2">Create a new account</Typography>
      <Typography>
        You will need an account to connect with Your colleagues or classmates
        and share calendars.
      </Typography>
      <View style={styles.textFieldsContainer}>
        <CustomTextInput
          placeholder="First Name"
          autoCapitalize="words"
          value={registrationData.firstName}
          onChange={(newValue) => handleDataChange(newValue, firstName)}
        />
        <CustomTextInput
          placeholder="Last Name"
          autoCapitalize="words"
          value={registrationData.lastName}
          onChange={(newValue) => handleDataChange(newValue, lastName)}
        />
        <CustomTextInput
          placeholder="Email Name"
          keyboardType="email-address"
          autoCapitalize="none"
          value={registrationData.email}
          onChange={(newValue) => handleDataChange(newValue, email)}
        />
        <CustomTextInput
          placeholder="Password"
          secureTextEntry
          value={registrationData.password}
          onChange={(newValue) => handleDataChange(newValue, password)}
        />
        <CustomTextInput
          placeholder="Confirm Password"
          secureTextEntry
          value={registrationData.repeatedPassword}
          onChange={(newValue) => handleDataChange(newValue, repeatedPassword)}
        />
      </View>

      <View style={styles.linkContainer}>
        <Typography>Already have an account? </Typography>
        <Link onPress={() => console.log('dsa')}>Log in here</Link>
      </View>

      <CustomButton
        title="Create Account"
        onPress={() => console.log('crt acc')}
      />
    </View>
  );
};

export default RegisterScreen;
