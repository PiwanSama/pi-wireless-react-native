import React, { Component } from 'react';
import { View, Text, Image, ImageBackground, Alert, KeyboardAvoidingView } from 'react-native';
import { Constants } from 'expo';
import { Input, Button } from 'react-native-elements'; 
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../constants/Styles.js';
import * as FirebaseAPI from '../modules/FirebaseAPI';
import firebase from 'firebase';


  export default class Verify extends Component {
    constructor(props){
    super(props);
    this.state={
    code:"",
    user: null,
    message: '',
    confirmResult: null,
  }}

  render() {
    return ( 
    <View>
      <ImageBackground 
        source = {require('../assets/images/girly.jpg')} 
        style = {{width:'100%', height: '100%'}}
        >
        <KeyboardAvoidingView style={styles.card} behavior="padding" enabled>
          <Text style={styles.welcometext}>PiChat</Text> 
            <Text style ={styles.signintext}>Enter your verification code</Text> 
            <Input
                style={{
                  height: 40,
                  borderWidth: 2,
                  borderColor:'#fff',
                  width: 300,
                  padding: 8,
                  fontSize: 20,
                  color: '#fff'
                }}
                inputContainerStyle={{borderBottomColor: 'rgba(255,255,255,1)',}}
                keyboardType="numeric"
                onChangeText={(text) => this.setState({code:text})}
                value={this.state.code}
                maxLength={4}
              />
              <Button
                  icon={
                    <Icon
                      name= 'arrow-right'
                      size={15}
                      color='#fff'
                    />
                  }
                  iconRight
                  title="Done"
                  onPress = {()=> this.validate()}                
                  buttonStyle={{
                    backgroundColor: "#750734",
                    width:290,
                    height:40,
                  }}
                  containerStyle= {{marginTop: 20}}
              />
    <Text style= {styles.alter}> No account? Sign Up</Text>
        </KeyboardAvoidingView>
      </ImageBackground>
    </View> 
    );
  }
}