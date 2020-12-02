import React, { useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import NumericInput from 'react-native-numeric-input';

const CartItemCard = () => {
  const [itemCount, setItemCount] = useState(1);
  return (
    <View style={{ backgroundColor: '#fff' }}>
      <View style={styles.cartItemWrapper}>
        <Image
          style={styles.cartImage}
          source={{
            uri: 'https://picsum.photos/id/1016/200',
          }}
          resizeMode="cover"
        />
        <View>
          <Text>Product</Text>
          <Text>Lotto</Text>
          <Text style={{ marginBottom: 10 }}>$30</Text>
          <NumericInput
            minValue={1}
            containerStyle={{ backgroundColor: '#dee0e3' }}
            rightButtonBackgroundColor="#dee0e3"
            leftButtonBackgroundColor="#dee0e3"
            value={itemCount}
            onChange={(value) => setItemCount(value)}
          />
        </View>
        <Text style={styles.crossIcon}>X</Text>
      </View>
    </View>
  );
};

export default CartItemCard;

const styles = StyleSheet.create({
  cartItemWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    padding: 15,
    borderWidth: 0,
    borderColor: 'rgba(255, 255, 255, 1.0)',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.3,
    shadowRadius: 1.0,

    elevation: 2,
  },
  cartImage: {
    width: 100,
    height: 100,
    marginRight: 20,
  },
  crossIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
    fontSize: 15,
  },
});
