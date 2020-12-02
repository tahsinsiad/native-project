import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SectionList,
  SafeAreaView,
  FlatList,
} from 'react-native';
import { SECTIONS } from '../static/categoryData';
import CategoryCard from './CategoryCard';
import ProductCard from './ProductCard';

const CategoryList = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <SectionList
          contentContainerStyle={{ paddingHorizontal: 10 }}
          stickySectionHeadersEnabled={false}
          sections={SECTIONS}
          renderSectionHeader={({ section }) => (
            <>
              <Text style={styles.sectionHeader}>{section.title}</Text>
              {section.horizontal ? (
                <FlatList
                  horizontal
                  data={section.data}
                  renderItem={({ item }) =>
                    section.isCat ? (
                      <CategoryCard category={item} />
                    ) : (
                      <ProductCard item={item} />
                    )
                  }
                  showsHorizontalScrollIndicator={false}
                />
              ) : null}
            </>
          )}
          renderItem={({ item, section }) => {
            if (section.horizontal) {
              return null;
            }
            return section.isCat ? (
              <CategoryCard category={item} />
            ) : (
              <ProductCard item={item} />
            );
          }}
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  sectionHeader: {
    fontWeight: '800',
    fontSize: 18,
    color: '#000',
    marginTop: 20,
    marginBottom: 5,
    marginLeft: 10,
  },
});

export default CategoryList;
