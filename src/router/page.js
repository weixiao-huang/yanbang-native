import { createStackNavigator } from 'react-navigation';
import login from '../pages/login';
import home from '../pages/home';

const commonSettings = {
  headerStyle: {
    backgroundColor: '#ec5367',
  },
  headerTitleStyle: {
    color: 'white',
  },
  headerBackTitleStyle: {
    color: '#e9e9ef',
  },
  gesturesEnabled: true,
  headerTintColor: '#e9e9ef',
}

const AppRouteConfigs = {
  login: {
    screen: login,
    navigationOptions: {
      title: 'Login',
      // header: null,
    },
  },
  home: {
    screen: home,
    navigationOptions: {
      title: 'Home',
      // header: null,
      ...commonSettings,
    },
  },
}

const StackNavigatorConfigs = {
  initialRouteName: 'login',
}

const navigator = createStackNavigator(AppRouteConfigs, StackNavigatorConfigs)

export default navigator;
