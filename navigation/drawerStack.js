import { createDrawerNavigator } from 'react-navigation-drawer';
import CartScreen from '../screens/cart';
import ShopScreen from '../screens/shop';

const screens = {
  Shop: {
    screen: ShopScreen,
    navigationOptions: {
      title: 'Shop',
      headerStyle: {
        backgroundColor: '#fff',
        elevation: 0,
      },
    },
  },
  Cart: {
    screen: CartScreen,
    navigationOptions: {
      title: 'Cart',
      headerStyle: {
        backgroundColor: '#fff',
        elevation: 0,
      },
    },
  },
};

// home stack navigator screens
const DrawerStack = createDrawerNavigator(screens);
export default DrawerStack;
