import * as firebase from 'firebase'


export const createUser = (email, password) => {
    console.log('CreateUser has been called.')

  firebase.auth().createUserWithEmailAndPassword(email.trim(), password)
    .catch((error) => console.log('createUser error: ', error));
}

export const signInUserEmail = (email, password) => {
    console.log('signInUserEmail has been called')
    firebase.auth().signInWithEmailAndPassword(email.trim(), password)
        .catch((error) => console.log('signIn error: ', error));
        if (email.trim()==""){
            console.log('email empty')
        } 
        if (password==""){
            console.log('pass empty')
        }
        else{
            console.log(email.trim())
            console.log(password)
        }     
}

export const signInUserPhone= (phoneNumber) => {
    console.log('signInUserPhone has been called')
    this.setState({ message: 'Sending code ...' });
    firebase.auth().signInWithPhoneNumber(phoneNumber)
      .then(confirmResult => console.log('confirmed : ', error))
      .catch(error => console.log('error : ', error));
    } 

export const onVerificationCode = () => {
  const { confirmResult, verificationCode } = this.state;
  confirmResult.confirm(verificationCode)
    .then((user) => {
      // If you need to do anything with the user, do it here
      // The user will be logged in automatically by the
      // `onAuthStateChanged` listener we set up in App.js earlier
      navigation.navigate('App');
    })
    .catch((error) => {
      const { code, message } = error;
      // For details of error codes, see the docs
      // The message contains the default Firebase string
      // representation of the error
    });
}
export const logoutUser = () => {
    firebase.auth().signOut();
}