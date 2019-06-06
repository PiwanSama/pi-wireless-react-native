import {StyleSheet} from 'react-native';

const styles= StyleSheet.create({
  welcometext:{
      padding:30,
      fontSize : 32,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center' 
    },
    signintext: {
      fontSize : 18,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'left'
        
    },
    card: {
      backgroundColor: 'rgba(52, 52, 52, 0.4)',
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',

    },
    alter: {
      color: '#fff',
      padding: 20,
      textAlign: 'center'
    },
    mute:{
      color: '#fff',
      fontSize: 10
    },
});

export default styles;