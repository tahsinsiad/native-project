import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import DrawerStack from './drawerStack';
import Header from '../shared/header';
import OtpScreen from '../screens/otp';
import LoginScreen from '../screens/login';
import WelcomeScreen from '../screens/welcomeScreen';

const screens = {
  Welcome: {
    screen: WelcomeScreen,
    navigationOptions: {
      title: '',
      headerStyle: {
        backgroundColor: '#fff',
        elevation: 0,
      },
    },
  },
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
  Shop: {
    screen: DrawerStack,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header title="Shop" navigation={navigation} />,
        headerLeft: () => null,
      };
    },
  },
};

// home stack navigator screens
const RouteStack = createStackNavigator(screens);

export default createAppContainer(RouteStack);
