import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors} from '../../constants/colors';

const Checkbox = ({checked, onCheck}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={() => onCheck(!checked)}
      style={styles.container}>
      {checked ? (
        <View style={styles.innerContainer}>
          <Image
            style={styles.checkIcon}
            source={require('../../assets/check.png')}
          />
        </View>
      ) : null}
    </TouchableOpacity>
  );
};

export default React.memo(Checkbox);

const styles = StyleSheet.create({
  container: {
    borderColor: colors.gray,
    borderWidth: 1,
    borderRadius: 4,
    height: 22,
    width: 22,
  },
  innerContainer: {
    backgroundColor: colors.gray,
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkIcon: {
    width: 18,
    height: 14,
  },
});
