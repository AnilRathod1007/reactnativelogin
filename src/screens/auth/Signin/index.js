import {ScrollView, StyleSheet, Text} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

import AuthHeader from '../../../components/AuthHeader';
import Input from '../../../components/Input';
import {colors} from '../../../constants/colors';
import Button from '../../../components/Button';
import Seperator from '../../../components/Seperator';
import GoogleLogin from '../../../components/GoogleLogin';

const Signin = ({navigation}) => {
  const onBack = () => {
    navigation.goBack();
  };

  const onSignup = () => {
    navigation.navigate('Signup');
  };
  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <AuthHeader title="Sign In" onPress={onBack} />
        <Input label="Email" placeholder="example@gmail.com" />
        <Input isPassword label="Password" placeholder="**********" />

        <Button title="Sign In" style={styles.button} />
        <Seperator text="Or sign in with" />
        <GoogleLogin />
        <Text style={styles.footerText}>
          Don’t have an account?{' '}
          <Text onPress={onSignup} style={styles.footerLink}>
            Sign Up
          </Text>
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Signin;

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  agreeRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  agreeText: {
    color: colors.blue,
    marginHorizontal: 13,
  },
  textBold: {
    fontWeight: 'bold',
  },
  button: {
    marginVertical: 16,
  },
  footerText: {
    color: colors.blue,
    marginBottom: 40,
    textAlign: 'center',
  },

  footerLink: {
    fontWeight: 'bold',
  },
});
