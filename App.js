import React, { Component } from 'react';
import { View } from 'react-native';
import * as firebase from 'firebase';
import { LoginStack, TabRouter } from './Router';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
    apiKey: "AIzaSyCEUBTP6Stenu85ZhQMu1ZRSwt13cMR_d4",
    authDomain: "medicalassistentapp.firebaseapp.com",
    databaseURL: "https://medicalassistentapp.firebaseio.com",
    projectId: "medicalassistentapp",
    storageBucket: "medicalassistentapp.appspot.com",
    messagingSenderId: "575160671195"
    });
  }

  render() {
    return (
        <LoginStack />
        // <TabRouter />
    );
  }

}

export default App;