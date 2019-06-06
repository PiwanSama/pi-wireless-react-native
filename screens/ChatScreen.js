import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import { Header, Avatar, ListItem, SearchBar} from 'react-native-elements';
//import {avatar_url} from 'component';
import { WebBrowser } from 'expo';

const chatList = [
  {
    name: 'Danielle',
    avatar_url: 'assets/images/user.jpg',
    subtitle :'message one',
    value: 2
  },
  {
    name: 'Lando',
    avatar_url : '../assets/images/user.jpg',
    subtitle :'message two',
    value: 3
  },
    {
    name: 'Grace',
    avatar_url : '../assets/images/user.jpg',
    subtitle :'message three',
    value: 7
  },
   {
    name: 'David',
    avatar_url : '../assets/images/user.jpg',
    subtitle :'message four',
    value: 1
  },
   {
    name: 'BCS3',
    avatar_url : '../assets/images/user.jpg',
    subtitle :'message five',
    value: 17
  }
]

export default class HomeScreen extends React.Component{
render() {
  return (
    <View>
      <Header
        innerContainerStyles = {{flexDirection:'row'}}
        barStyle = 'light-content'
        backgroundColor = '#750734'
        >
        <View style = {{alignItems : 'center'}}>
          <Text style={{justifyContent: 'center', color: '#fff', fontWeight :'bold', fontSize : 25 }}>Pi Chat</Text> 
        </View>
        <Avatar
            size="small"
            rounded
            title="PS"
            activeOpacity={0.7}
        />
      </Header>

      <SearchBar
        lightTheme
        round
        searchIcon = {{size : 30}}
        placeholder = 'Search Messages' />

      {
        chatList.map((u, i) =>(
            <ListItem 
              key = {i}
              leftAvatar = {{ source:{uri: u.avatar_url} }}
              title = <Text style = {styles.uname}>{u.name}</Text>
              subtitle = <Text style = {styles.umessage}>{u.subtitle}</Text>
              badge = {{ value: u.value, textStyle: { color: '#fff' }, containerStyle: { marginTop: -10 } }}
            />
          ))
      }
    </View>
  );
}
}

const styles= StyleSheet.create({
  uname:{
    fontSize : 18,
    fontWeight: 'bold',
    color: '#000'
  },
  umessage:{
    fontSize : 13
  }
})