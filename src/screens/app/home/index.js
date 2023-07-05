import React, {useState, useEffect} from 'react';
import {StyleSheet, FlatList, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {categories} from '../../../data/categories';
import {products} from '../../../data/products';
import Header from '../../../components/Header';
import CategoryBox from '../../../components/CategoryBox';
import ProductHomeItem from '../../../components/ProductHomeItem';

const Home = ({navigation}) => {
  const [selectedCategories, setSelectedCategories] = useState();
  const [keyword, setKeyword] = useState();
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    if (selectedCategories && !keyword) {
      const updatedProducts = products.filter(
        product => product.category === selectedCategories,
      );
      setFilteredProducts(updatedProducts);
    } else if (selectedCategories && keyword) {
      const updatedProducts = products.filter(
        product =>
          product.category === selectedCategories &&
          product?.title
            ?.toLocaleLowerCase()
            .includes(keyword?.toLocaleLowerCase()),
      );
      setFilteredProducts(updatedProducts);
    } else if (!selectedCategories && keyword) {
      const updatedProducts = products.filter(product =>
        product?.title
          ?.toLocaleLowerCase()
          .includes(keyword?.toLocaleLowerCase()),
      );
      setFilteredProducts(updatedProducts);
    } else if (!selectedCategories && !keyword) {
      setFilteredProducts(products);
    }
  }, [selectedCategories, keyword]);

  const renderCategoriesItem = ({item, index}) => {
    return (
      <CategoryBox
        onPress={() => setSelectedCategories(item.id)}
        isSelected={item.id === selectedCategories}
        isFirst={index === 0}
        title={item?.title}
        image={item?.image}
      />
    );
  };

  const renderProductItem = ({item, index}) => {
    const onProductPress = product => {
      navigation.navigate('ProductDetails',{product});
    };
    return <ProductHomeItem onPress={() => onProductPress(item)} {...item} />;
  };

  return (
    <SafeAreaView>
      <Header
        showSerach
        keyword={keyword}
        onSerach={setKeyword}
        title={'Find All You Need'}
      />
      <FlatList
        showsHorizontalScrollIndicator={false}
        style={styles.list}
        horizontal
        data={categories}
        renderItem={renderCategoriesItem}
        keyExtractor={(item, index) => String(index)}
      />

      <FlatList
        numColumns={2}
        style={styles.productsList}
        data={filteredProducts}
        renderItem={renderProductItem}
        keyExtractor={(item, index) => String(item.id)}
        ListFooterComponent={<View style={{height: 200}} />}
      />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  list: {
    paddingVertical: 24,
  },
  productsList: {
    paddingHorizontal: 16,
  },
});
