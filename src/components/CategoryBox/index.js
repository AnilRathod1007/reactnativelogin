import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
import React from 'react';
import {colors} from '../../constants/colors';

const CategoryBox = ({title, image, isFirst, onPress, isSelected}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.container, isFirst ? {marginLeft: 24} : {}]}>
      <View
        style={[
          styles.imageContainer,
          isSelected ? {backgroundColor: colors.black} : {},
        ]}>
        <Image style={styles.image} source={{uri: image}} />
      </View>
      <Text
        style={[
          styles.title,
          isSelected ? {color: colors.blue, fontWeight: '500'} : {},
        ]}>
        {title}
      </Text>
    </Pressable>
  );
};

export default React.memo(CategoryBox);

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 8,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 16,
  },
  imageContainer: {
    backgroundColor: colors.lightGray,
    padding: 16,
    borderRadius: 8,
    marginBottom: 8,
  },
  image: {
    width: 32,
    height: 32,
  },
  title: {
    color: colors.gray,
  },
});
