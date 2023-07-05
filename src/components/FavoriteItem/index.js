import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
import React from 'react';
import {colors} from '../../constants/colors';

const FavoriteItem = ({title, price, image, onPress}) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Image style={styles.image} source={{uri: image}} />
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>{price}</Text>
      </View>
      <Image source={require('../../assets/close.png')} style={styles.icon} />
    </Pressable>
  );
};

export default React.memo(FavoriteItem);

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 24,
    paddingVertical: 16,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: colors.blueGray,
  },

  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 20,
  },
  content: {
    flex: 1,
  },
  title: {
    color: colors.textGray,
    paddingVertical: 8,
  },
  price: {
    color: colors.black,
    paddingBottom: 8,
  },
  icon: {
    width: 24,
    height: 24,
    marginLeft: 8,
  },
});
