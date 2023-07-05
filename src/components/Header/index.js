import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../../constants/colors';
import Input from '../Input';

const Header = ({
  title,
  onPress,
  onSerach,
  onLogout,
  showLogout,
  showSerach,
  keyword,
  showBack,
}) => {
  const [showSearchInput, setShowSearchInput] = useState(false);
  const onSerachClick = () => {
    setShowSearchInput(s => !s);
  };
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        {showBack ? (
          <Pressable hitSlop={20} style={styles.icon} onPress={onPress}>
            <Image source={require('../../assets/header/back.png')} />
          </Pressable>
        ) : showSerach ? (
          <Pressable hitSlop={20} style={styles.icon} onPress={onSerachClick}>
            <Image source={require('../../assets/header/search.png')} />
          </Pressable>
        ) : (
          <View style={styles.space} />
        )}
        <Text style={styles.title}>{title}</Text>
        {showLogout ? (
          <Pressable hitSlop={20} style={styles.icon} onPress={onLogout}>
            <Image source={require('../../assets/header/logout.png')} />
          </Pressable>
        ) : (
          <View style={styles.space} />
        )}
      </View>
      {showSearchInput ? (
        <Input
          onChangeText={onSerach}
          value={keyword}
          placeholder="Type your key word"
        />
      ) : null}
    </View>
  );
};

export default React.memo(Header);

const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: 24,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: colors.black,
    fontSize: 16,
    fontWeight: 'bold',
  },
  icon: {
    width: 24,
    height: 24,
  },
  space: {
    width: 24,
  },
});
