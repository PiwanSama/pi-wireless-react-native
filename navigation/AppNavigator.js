import React from 'react';
import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import SignupScreen from '../screens/SignupScreen';
import SignInScreen from '../screens/SignInScreen';
import VerifyScreen from '../screens/VerifyScreen';
import MainTabNavigator from './MainTabNavigator';

const AuthStack = createStackNavigator({ SignUp: SignupScreen }, { headerMode: 'none' });
const SignInStack = createStackNavigator({ SignIn: SignInScreen }, { headerMode: 'none' });
const VerifyStack = createStackNavigator({ Verify: VerifyScreen }, { headerMode: 'none' });

export default createAppContainer(createSwitchNavigator(
  {
  	Auth: AuthStack,
    App: MainTabNavigator,
    SignUserIn: SignInStack,
    VerifyUser: VerifyStack, 
  },
  {
    initialRouteName: 'Auth',
  }
));