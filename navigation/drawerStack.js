import { createDrawerNavigator } from 'react-navigation-drawer';
import CartScreen from '../screens/cart';
import ProductsScreen from '../screens/products';

const screens = {
  Products: {
    screen: ProductsScreen,
    navigationOptions: {
      title: 'Products',
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
