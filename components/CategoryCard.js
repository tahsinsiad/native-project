import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const CategoryCard = ({ category }) => {
  return (
    <View style={styles.category}>
      <Image
        source={{
          uri: category.uri,
        }}
        style={styles.categoryPhoto}
        resizeMode="cover"
      />
      <Text style={styles.categoryText}>{category.text}</Text>
    </View>
  );
};

export default CategoryCard;

const styles = StyleSheet.create({
  category: {
    margin: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  categoryPhoto: {
    width: 120,
    height: 120,
    flex: 1,
    opacity: 0.4,
    borderRadius: 10,
    backgroundColor: '#000',
  },
  categoryText: {
    position: 'absolute',
    color: 'rgba(255, 255, 255, 1.0)',
    fontSize: 20,
    fontWeight: '600',
    marginTop: 5,
  },
});
