
import React, { Component } from 'react';
import { View, Text, Image, ImageBackground, Alert, KeyboardAvoidingView } from 'react-native';
import { Constants } from 'expo';
import { Input, Button } from 'react-native-elements'; 
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../constants/Styles.js';
import * as FirebaseAPI from '../modules/FirebaseAPI';
import firebase from 'firebase';


export default class SignIn extends Component {

  constructor(props){
    super(props);
    this.state={
    password:"",
    phone:"",
  }}

  componentDidMount(){
    this.watchAuthState(this.props.navigation)
    //const { currentUser } = firebase.auth()
    //this.setState({ currentUser })
  }

  watchAuthState(navigation){
    firebase.auth().onAuthStateChanged(function(user){
      console.log('onAuthStateChanged:', user)
      if (!user){
        navigation.navigate('Auth')
      }
    });
  }

  signInUserPhone(){
    FirebaseAPI.signInUserPhone(this.state.phone)
  }

  validate(){
    var estring=this.state.email;
    var pstring=this.state.password;
    var tstring=this.state.phone;
    if(estring=="" || pstring=="" || tstring==""){
      Alert.alert('Hey!','Enter all fields first',
            [
              {text: 'OK', onPress: () => console.log('OK for empty Pressed')},
            ],);
    }
    else{
      var emailValidator = require("email-validator");
      var emailbool= emailValidator.validate(estring);
      console.log('email done')
      var passwordValidator = require('password-validator');
      var schema = new passwordValidator();
        schema
        .is().min(8)                                    
        var passbool= schema.validate(pstring);
        console.log('password done')
        if(!emailbool==true || !passbool==true){
            Alert.alert('Hold On...','Check your login details again',
              [
                {text: 'OK', onPress: () => console.log('OK for invalid Pressed')},
              ],);
        }
        else{
          this.signInUserEmail();
          Alert.alert('Awesome!','Getting you set up...',
              [
                {text: 'OK', onPress: () => console.log('OK for finished Pressed')},
              ],);
        }
      }
    }

  render() {
    return ( 
    <View>
      <ImageBackground 
        source = {require('../assets/images/girly.jpg')} 
        style = {{width:'100%', height: '100%'}}
        >
        <KeyboardAvoidingView style={styles.card} behavior="padding" enabled>
          <Text style={styles.welcometext}>PiChat</Text> 
            <Text style ={styles.signintext}>Phone Number</Text> 
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
                onChangeText={(text) => this.setState({phone:text})}
                value={this.state.phone}
                autoCapitalize="none"
                placeholder="e.g +256772123456"
                maxLength={13}
              />
              <Text style ={styles.signintext}>Password</Text>
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
                secureTextEntry
                onChangeText={(text) => this.setState({password:text})}
                value={this.state.password}
                autoCapitalize="none"
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
                  title="Go"
                  onPress = {()=> this.signInUserPhone()}                
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