import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors} from '../../constants/colors';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';

const GoogleLogin = ({onPress}) => {
  const HandalGoogleLogin = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log(userInfo, '122222222');
      setState({userInfo});
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={styles.container}
      onPress={HandalGoogleLogin}>
      <Image style={styles.image} source={require('../../assets/Gmail.png')} />
    </TouchableOpacity>
  );
};

export default GoogleLogin;

const styles = StyleSheet.create({
  container: {
    width: '45%',
    backgroundColor: colors.darkGray,
    borderRadius: 14,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    marginBottom: 30,
  },
  image: {
    height: 45,
    width: 45,
  },
});
