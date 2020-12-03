import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Login from '../components/Login';
import DrawerStack from './drawerStack';
import Header from '../shared/header';
import OtpScreen from '../screens/otp';
import LoginScreen from '../screens/login';

const screens = {
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      title: '',
      headerStyle: {
        backgroundColor: '#fff',
        elevation: 0,
      },
    },
  },
  Otp: {
    screen: OtpScreen,
    navigationOptions: {
      title: '',
      headerStyle: {
        backgroundColor: '#fff',
        elevation: 0,
      },
    },
  },
  Products: {
    screen: DrawerStack,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header title="Products" navigation={navigation} />,
        headerLeft: () => null,
      };
    },
  },
};

// home stack navigator screens
const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
