import {StyleSheet, FlatList} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {products} from '../../../data/products';
import FavoriteItem from '../../../components/FavoriteItem';
import Header from '../../../components/Header';

const Favorites = () => {
  const renderFavoriteItem = ({item}) => {
    return <FavoriteItem {...item} />;
  };
  return (
    <SafeAreaView>
      <Header title="Favorites" />
      <FlatList
        data={products}
        renderItem={renderFavoriteItem}
        keyExtractor={item => String(item.id)}
      />
    </SafeAreaView>
  );
};

export default Favorites;

const styles = StyleSheet.create({});
