import React, {useState} from 'react';
import {KeyboardAvoidingView, View} from 'react-native';
import CustomTextInput from '../../components/CustomTextInput';
import Typography from '../../components/Typography';
import {SIGN_IN_SCREEN} from '../../routes/WelcomeRouterNames';
import styles from './styles';
import Link from '../../components/Link';
import CustomButton from '../../components/CustomButton';
import {ScrollView} from 'react-native-gesture-handler';
import Axios from 'axios';
import {REGISTER_URL} from '../../../apiLinks';

const firstName = 'firstName';
const lastName = 'lastName';
const email = 'email';
const password = 'password';
const repeatedPassword = 'repeatedPassword';
const FIELD_MARGIN = 5;

const RegisterScreen = ({navigation}) => {
  const [registrationData, setRegistrationData] = useState({
    [firstName]: '',
    [lastName]: '',
    [email]: '',
    [password]: '',
    [repeatedPassword]: '',
  });
  const [isCreatingAccount, setIsCreatingAccount] = useState(false);
  const [serverResponse, setServerResponse] = useState({
    statusCode: 0,
    message: '',
  });

  const handleDataChange = (newValue, name) => {
    // newValue is the new value after data changed
    // name is the name of the field that we want to mutate
    setRegistrationData({...registrationData, [name]: newValue});
  };

  const handleRegisterPress = () => {
    setIsCreatingAccount(true);

    Axios({
      method: 'POST',
      url: REGISTER_URL,
      data: registrationData,
    })
      .then((res) => {
        setServerResponse({
          statusCode: res.status,
          message: res.data.message,
        });
        setIsCreatingAccount(false);
      })
      .catch((err) => {
        setServerResponse({
          statusCode: err.status,
          message:
            err.response.data.message ||
            'There was an error creating Your account, please try again.',
        });
        setIsCreatingAccount(false);
      });
  };

  return (
    <KeyboardAvoidingView style={styles.main}>
      <ScrollView contentContainerStyle={styles.flexGrow}>
        <View style={styles.contentContainer}>
          <Typography variant="h2">Create a new account</Typography>
          <Typography>
            You will need an account to connect with Your colleagues or
            classmates and share calendars.
          </Typography>
          <View style={styles.flexGrow}>
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
              placeholder="Email"
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

            {/* 
            This is the message that the server responds to 
            TODO: Style this according to the status code, make it green for 200 and red for 400
            */}
            <Typography>{serverResponse.message}</Typography>
          </View>

          <View style={styles.linkContainer}>
            <Typography>Already have an account? </Typography>
            <Link onPress={() => navigation.navigate(SIGN_IN_SCREEN)}>
              Log in here
            </Link>
          </View>

          <CustomButton
            disabled={isCreatingAccount}
            title="Create Account"
            onPress={handleRegisterPress}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;
