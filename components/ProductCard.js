import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const ProductCard = ({ item }) => {
  return (
    <View style={styles.item}>
      <Image
        source={{
          uri: item.uri,
        }}
        style={styles.itemPhoto}
        resizeMode="cover"
      />
      <Text style={styles.itemText}>{item.price}</Text>
      <Text style={styles.itemText}>{item.text}</Text>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  item: {
    margin: 10,
    flex: 1,
    borderRadius: 5,
  },
  itemPhoto: {
    width: 150,
    height: 150,
    borderRadius: 5,
  },
  itemText: {
    color: '#000',
    fontSize: 13,
    marginTop: 5,
  },
});
