import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Login from '../components/Login';
import Otp from '../components/Otp';
import Products from '../screens/products';

const screens = {
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
};

// home stack navigator screens
const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
