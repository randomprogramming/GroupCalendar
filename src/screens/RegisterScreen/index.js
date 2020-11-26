import React, {useState} from 'react';
import {KeyboardAvoidingView, View} from 'react-native';
import CustomTextInput from '../../components/CustomTextInput';
import Typography from '../../components/Typography';
import {SIGN_IN} from '../../routes/WelcomeRouterNames';
import styles from './styles';
import Link from '../../components/Link';
import CustomButton from '../../components/CustomButton';
import {ScrollView} from 'react-native-gesture-handler';

const firstName = 'firstName';
const lastName = 'lastName';
const email = 'email';
const password = 'password';
const repeatedPassword = 'repeatedPassword';
const FIELD_MARGIN = 10;

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
    <KeyboardAvoidingView style={styles.main}>
      <ScrollView>
        <View style={styles.contentContainer}>
          <Typography variant="h2">Create a new account</Typography>
          <Typography>
            You will need an account to connect with Your colleagues or
            classmates and share calendars.
          </Typography>
          <CustomTextInput
            placeholder="First Name"
            autoCapitalize="words"
            value={registrationData.firstName}
            onChange={(newValue) => handleDataChange(newValue, firstName)}
            marginTop={FIELD_MARGIN}
          />
          <CustomTextInput
            placeholder="Last Name"
            autoCapitalize="words"
            value={registrationData.lastName}
            onChange={(newValue) => handleDataChange(newValue, lastName)}
            marginTop={FIELD_MARGIN}
          />
          <CustomTextInput
            placeholder="Email Name"
            keyboardType="email-address"
            autoCapitalize="none"
            value={registrationData.email}
            onChange={(newValue) => handleDataChange(newValue, email)}
            marginTop={FIELD_MARGIN}
          />
          <CustomTextInput
            placeholder="Password"
            secureTextEntry
            value={registrationData.password}
            onChange={(newValue) => handleDataChange(newValue, password)}
            marginTop={FIELD_MARGIN}
          />
          <CustomTextInput
            placeholder="Confirm Password"
            secureTextEntry
            value={registrationData.repeatedPassword}
            onChange={(newValue) =>
              handleDataChange(newValue, repeatedPassword)
            }
            marginTop={FIELD_MARGIN}
          />

          <View style={styles.linkContainer}>
            <Typography>Already have an account? </Typography>
            <Link onPress={() => navigation.navigate(SIGN_IN)}>
              Log in here
            </Link>
          </View>

          <CustomButton
            title="Create Account"
            onPress={() => console.log('crt acc')}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;
