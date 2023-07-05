import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Button from '../../../components/Button';
import {colors} from '../../../constants/colors';

const Splash = ({navigation}) => {
  console.log('navigation', navigation);

  const onSignup = () => {
    navigation.navigate('Signup');
  };
  const onSignin = () => {
    navigation.navigate('Signin');
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Image
          resizeMode="contain"
          style={styles.image}
          source={require('../../../assets/splash_img.png')}
        />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>You'll Find</Text>
          <Text style={[styles.title, styles.innerTitle]}>All you need </Text>
          <Text style={styles.title}>Here! </Text>
        </View>
        <Button title="Sign Up" onPress={onSignup} />
        <Pressable onPress={onSignin}>
          <Text style={styles.footerText}>Sign In</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    padding: 24,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  image: {
    width: '100%',
    height: 200,
  },
  titleContainer: {
    marginVertical: 54,
  },
  title: {
    fontSize: 40,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  innerTitle: {
    color: colors.orange,
    textDecorationLine: 'underline',
  },
  footerText: {
    textAlign: 'center',
    color: colors.blue,
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 30,
  },
});
