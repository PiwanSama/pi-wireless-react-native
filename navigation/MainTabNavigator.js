import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import ChatScreen from '../screens/ChatScreen';
import FileScreen from '../screens/FileScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
}, 
{ headerMode: 'none' });

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused, horizontal, tintColor }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-home' : 'md-home'}
    />
  ),
};

const ChatStack = createStackNavigator({
  Chats: ChatScreen,
}, 
{ headerMode: 'none' });

ChatStack.navigationOptions = {
  tabBarLabel: 'Chats',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-chatbubbles' : 'md-chatbubbles'}
    />
  ),
};

const FileStack = createStackNavigator({
  Files: FileScreen,
}, 
{ headerMode: 'none' });

FileStack.navigationOptions = {
  tabBarLabel: 'Files',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-folder' : 'md-folder'}
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  ChatStack,
  FileStack,
});
