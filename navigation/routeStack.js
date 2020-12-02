import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Login from '../components/Login';

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
  //   ReviewDetails: {
  //     screen: ReviewDetails,
  //   },
};

// home stack navigator screens
const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
