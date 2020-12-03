import React from 'react';
import { Button, Text, View } from 'react-native';
import cartStyles from '../styles/cartStyles';
import globalStyles from '../styles/globalStyles';
import CartItemCard from './CartItemCard';

const CartList = ({ navigation }) => {
  const handleBackToHomeBtnPress = () => {
    navigation.navigate('Products');
  };
  return (
    <View style={globalStyles.container}>
      <CartItemCard />
      <CartItemCard />
      <View style={{ margin: 20 }}>
        <Text style={cartStyles.address}>Address</Text>
        <View style={cartStyles.price}>
          <Text style={cartStyles.text}>Subtotal</Text>
          <Text style={cartStyles.text}>$300</Text>
        </View>
        <View style={cartStyles.price}>
          <Text style={cartStyles.text}>Discount</Text>
          <Text style={cartStyles.text}>10%</Text>
        </View>
        <View style={cartStyles.price}>
          <Text style={cartStyles.text}>Shipping</Text>
          <Text style={cartStyles.text}>$100</Text>
        </View>
        <View style={cartStyles.total}>
          <Text style={cartStyles.text}>Total</Text>
          <Text style={cartStyles.text}>$500</Text>
        </View>
        <Button
          color="#64B6FF"
          onPress={handleBackToHomeBtnPress}
          title="Back to home"
        />
      </View>
    </View>
  );
};

export default CartList;
