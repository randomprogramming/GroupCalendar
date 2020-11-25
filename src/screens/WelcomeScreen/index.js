import React from 'react';
import {View, Image} from 'react-native';
import CustomButton from '../../components/CustomButton';
import Typography from '../../components/Typography';
import styles from './styles';
import Logo from '../../../static/images/logo.png';
import {REGISTER} from '../../routes/WelcomeRouterNames';

const WelcomeScreen = ({navigation}) => {
  return (
    <View style={styles.main}>
      <View style={styles.flex}>
        <Typography variant="h2">Welcome to the Group Calendar App</Typography>
        <Image source={Logo} style={styles.image} />
      </View>
      <View>
        <CustomButton title="Sign In" />
        <CustomButton
          title="Register"
          onPress={() => navigation.navigate(REGISTER)}
        />
      </View>
    </View>
  );
};
export default WelcomeScreen;
