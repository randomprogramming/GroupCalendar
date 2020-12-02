import React, {useState} from 'react';
import {KeyboardAvoidingView, View} from 'react-native';
import CustomTextInput from '../../components/CustomTextInput';
import Typography from '../../components/Typography';
import {REGISTER_SCREEN} from '../../routes/WelcomeRouter/names';
import styles from './styles';
import Link from '../../components/Link';
import CustomButton from '../../components/CustomButton';
import {ScrollView} from 'react-native-gesture-handler';
import Axios from 'axios';
import {LOGIN_URL} from '../../../apiLinks';
import {useDispatch} from 'react-redux';
import {storeToken} from '../../actions/accountActions';

const email = 'email';
const password = 'password';

const FIELD_MARGIN = 5;

const LoginScreen = ({navigation}) => {
  const [loginData, setLoginData] = useState({
    [email]: '',
    [password]: '',
  });
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [serverResponse, setServerResponse] = useState({
    statusCode: 0,
    message: '',
  });

  const dispatch = useDispatch();

  const handleDataChange = (newValue, name) => {
    // newValue is the new value after data changed
    // name is the name of the field that we want to mutate
    setLoginData({...loginData, [name]: newValue});
  };

  const handleLoginPress = async () => {
    setIsLoggingIn(true);
    Axios({
      method: 'POST',
      url: LOGIN_URL,
      data: loginData,
    })
      .then((res) => {
        setServerResponse({
          statusCode: res.status,
          message: res.data.message,
        });
        // Save the token we got in the Keychain
        dispatch(storeToken(res.data.token));
        setIsLoggingIn(false);
      })
      .catch((err) => {
        setServerResponse({
          statusCode: err.status,
          message:
            err.response.data.message ||
            'There was an error logging You in, please try again.',
        });
        setIsLoggingIn(false);
      });
  };

  return (
    <KeyboardAvoidingView style={styles.main}>
      <ScrollView contentContainerStyle={styles.flexGrow}>
        <View style={styles.contentContainer}>
          <Typography variant="h2">Welcome back</Typography>
          <Typography variant="h2">Let's get You signed in</Typography>
          <Typography>
            Sign in to get access to Your calendars and start sharing calendars
            with Your colleagues.
          </Typography>
          <View style={styles.flexGrow}>
            <CustomTextInput
              placeholder="Email"
              keyboardType="email-address"
              autoCapitalize="none"
              value={loginData.email}
              onChange={(newValue) => handleDataChange(newValue, email)}
              marginTop={FIELD_MARGIN}
            />
            <CustomTextInput
              placeholder="Password"
              secureTextEntry
              value={loginData.password}
              onChange={(newValue) => handleDataChange(newValue, password)}
              marginTop={FIELD_MARGIN}
            />

            {/* TODO: Style this according to the status code, make it green for 200 and red for 400 */}
            <Typography>{serverResponse.message}</Typography>
          </View>

          <View style={styles.linkContainer}>
            <Typography>Don't have an account yet? </Typography>
            <Link onPress={() => navigation.navigate(REGISTER_SCREEN)}>
              Sign up here
            </Link>
          </View>

          <CustomButton
            disabled={isLoggingIn}
            title="Sign in"
            onPress={handleLoginPress}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
