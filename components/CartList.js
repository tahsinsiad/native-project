import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import CartItemCard from './CartItemCard';

const CartList = () => {
  return (
    <View style={{ backgroundColor: '#fff', flex: 1 }}>
      <CartItemCard />
      <CartItemCard />
      <View style={{ margin: 20 }}>
        <Text style={styles.address}>Address</Text>
        <View style={styles.price}>
          <Text style={styles.text}>Subtotal</Text>
          <Text style={styles.text}>$300</Text>
        </View>
        <View style={styles.price}>
          <Text style={styles.text}>Discount</Text>
          <Text style={styles.text}>10%</Text>
        </View>
        <View style={styles.price}>
          <Text style={styles.text}>Shipping</Text>
          <Text style={styles.text}>$100</Text>
        </View>
        <View style={styles.total}>
          <Text style={styles.text}>Total</Text>
          <Text style={styles.text}>$500</Text>
        </View>
        <Button color="#64B6FF" title="Back to home" />
      </View>
    </View>
  );
};

export default CartList;

const styles = StyleSheet.create({
  price: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  total: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 40,
    borderTopWidth: 1,
    paddingTop: 10,
  },
  address: {
    fontSize: 20,
    marginBottom: 15,
  },
  text: {
    color: '#8c8d8f',
  },
});
