import React from 'react';
import PropTypes from 'prop-types';
import { Image, Text, View } from 'react-native';
import categoryStyles from '../styles/categoryStyles';

const CategoryCard = ({ category }) => {
  return (
    <View style={categoryStyles.category}>
      <Image
        source={{
          uri: category.uri,
        }}
        style={categoryStyles.categoryPhoto}
        resizeMode="cover"
      />
      <Text style={categoryStyles.categoryText}>{category.text}</Text>
    </View>
  );
};

CategoryCard.propTypes = {
  category: PropTypes.object,
};

export default CategoryCard;
