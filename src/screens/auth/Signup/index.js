import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

import AuthHeader from '../../../components/AuthHeader';
import Input from '../../../components/Input';
import Checkbox from '../../../components/Checkbox';
import {colors} from '../../../constants/colors';
import Button from '../../../components/Button';
import Seperator from '../../../components/Seperator';
import GoogleLogin from '../../../components/GoogleLogin';

const Signup = ({navigation}) => {
  const [checked, setChecked] = useState(false);
  const onBack = () => {
    navigation.goBack();
  };
  const onSignin = () => {
    navigation.navigate('Signin');
  };

  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <AuthHeader title="Sign Up" onPress={onBack} />
        <Input label="Name" placeholder="name" />
        <Input label="Email" placeholder="example@gmail.com" />
        <Input isPassword label="Password" placeholder="**********" />
        <View style={styles.agreeRow}>
          <Checkbox checked={checked} onCheck={setChecked} />
          <Text style={styles.agreeText}>
            I agree with <Text style={styles.textBold}>Terms</Text> &{' '}
            <Text style={styles.textBold}>Privacy</Text>
          </Text>
        </View>
        <Button title="Sign Up " style={styles.button} />
        <Seperator text="Or sign in with" />
        <GoogleLogin />
        <Text style={styles.footerText}>
          Already have an account?{' '}
          <Text onPress={onSignin} style={styles.footerLink}>
            Sign In
          </Text>
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Signup;

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
