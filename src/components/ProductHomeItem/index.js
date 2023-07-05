import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  Dimensions,
} from 'react-native';
import React from 'react';
import {colors} from '../../constants/colors';

const {width} = Dimensions.get('window');

const ProductHomeItem = ({title, price, image, onPress}) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Image style={styles.image} source={{uri: image}} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.price}>{price}</Text>
    </Pressable>
  );
};

export default React.memo(ProductHomeItem);

const styles = StyleSheet.create({
  container: {
    margin: 8,
  },

  image: {
    width: (width - 64) / 2,
    height: 220,
    borderRadius: 8,
  },
  title: {
    color: colors.textGray,
    paddingVertical: 8,
  },
  price: {
    color: colors.black,
    paddingBottom: 8,
  },
});
