import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Login from '../components/Login';
import Otp from '../components/Otp';
import Products from '../screens/products';
import CartList from '../components/CartList';

const screens = {
  Login: {
    screen: Login,
    navigationOptions: {
      title: '',
      headerStyle: {
        backgroundColor: '#fff',
        elevation: 0,
      },
    },
  },
  Otp: {
    screen: Otp,
    navigationOptions: {
      title: '',
      headerStyle: {
        backgroundColor: '#fff',
        elevation: 0,
      },
    },
  },
  Category: {
    screen: Products,
    navigationOptions: {
      title: '',
      headerStyle: {
        backgroundColor: '#fff',
        elevation: 0,
      },
    },
  },
  Cart: {
    screen: CartList,
    navigationOptions: {
      title: '',
      headerStyle: {
        backgroundColor: '#fff',
        elevation: 0,
      },
    },
  },
};

// home stack navigator screens
const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
