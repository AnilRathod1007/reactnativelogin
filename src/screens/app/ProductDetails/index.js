import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {colors} from '../../../constants/colors';

const {height} = Dimensions.get('window');

const ProductDetails = ({navigation, route}) => {
  console.log('navigation', navigation);
  console.log('route', route);

  const {product} = route.params || {};
  console.log('product//////////////', product);

  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <Image style={styles.image} source={{uri: product.image}} />
        <View style={styles.content}>
          <Text style={styles.title}>{product.title}</Text>
          <Text style={styles.price}>{product.price}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  container: {},
  image: {
    width: '100%',
    height: height * 0.45,
  },
  content: {
    backgroundColor: colors.white,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    marginTop: -40,
    paddingHorizontal: 24,
  },
  title: {
    marginTop: 40,
    fontSize: 24,
    fontWeight: '500',
  },
  price: {
    color: colors.black,
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 8,
  },
});
