import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../constants/colors';

const AuthHeader = ({title, onPress}) => {
  return (
    <View style={styles.container}>
      <Pressable hitSlop={20} style={styles.image} onPress={onPress}>
        <Image source={require('../../assets/back_icon.png')} />
      </Pressable>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default AuthHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
  },
  image: {
    height: 18,
    width: 18,
  },
  title: {
    color: colors.blue,
    fontSize: 26,
    fontWeight: '500',
    paddingHorizontal: 16,
  },
});
