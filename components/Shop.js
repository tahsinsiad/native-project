import React from 'react';
import { Text, View, SectionList, SafeAreaView, FlatList } from 'react-native';
import { SECTIONS } from '../static/shopData';
import categoryStyles from '../styles/categoryStyles';
import CategoryCard from './CategoryCard';
import ProductCard from './ProductCard';

const Shop = () => {
  return (
    <View style={categoryStyles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <SectionList
          contentContainerStyle={{ paddingHorizontal: 10 }}
          stickySectionHeadersEnabled={false}
          sections={SECTIONS}
          renderSectionHeader={({ section }) => (
            <>
              <Text style={categoryStyles.sectionHeader}>{section.title}</Text>
              {section.horizontal ? (
                <FlatList
                  horizontal
                  data={section.data}
                  renderItem={({ item }) =>
                    section.isCategory ? (
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
            return section.isCategory ? (
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

export default Shop;
