import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import { Header, Avatar, ListItem, SearchBar} from 'react-native-elements';
//import {UserAvatar} from 'component';
import { WebBrowser } from 'expo';


const userList = [
  {
    name: 'Mike',
    avatar_url: '../assets/images/user.jpg',
    subtitle :'Crazy lil dude',
  },
  {
    name: 'Barry',
    userAvatar : '../assets/images/user.jpg',
    subtitle :'Say hi to me. Im nice',
  },
    {
    name: 'Grace',
    userAvatar : '../assets/images/user.jpg',
    subtitle :'Code is life'
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
        searchIcon = {{size : 24}}
        placeholder = 'Search Users' />

      {
        userList.map((u, i) =>(
            <ListItem 
              key = {i}
              leftAvatar = {{ source:{uri: u.avatar_url} }}
              title = <Text style = {styles.uname}>{u.name}</Text>
              subtitle = <Text style = {styles.umessage}>{u.subtitle}</Text>
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