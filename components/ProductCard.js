import React from 'react';
import PropTypes from 'prop-types';
import { Image, Text, View } from 'react-native';
import productStyles from '../styles/productStyles';

const ProductCard = ({ item }) => {
  return (
    <View style={productStyles.item}>
      <Image
        source={{
          uri: item.uri,
        }}
        style={productStyles.itemPhoto}
        resizeMode="cover"
      />
      <Text style={productStyles.itemText}>{item.price}</Text>
      <Text style={productStyles.itemText}>{item.text}</Text>
    </View>
  );
};

ProductCard.propTypes = {
  item: PropTypes.object,
};

export default ProductCard;
