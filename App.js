import React from 'react';
import { TabRouter } from './Router';


const App = () => (
      <TabRouter />
   );

export default App;

// import React, { Component } from 'react';
// import { View } from 'react-native';
// import * as firebase from 'firebase';
// import { LoginStack, TabRouter } from './Router';

// class App extends Component {
//   componentWillMount() {
//     firebase.initializeApp({
//     apiKey: "AIzaSyCEUBTP6Stenu85ZhQMu1ZRSwt13cMR_d4",
//     authDomain: "medicalassistentapp.firebaseapp.com",
//     databaseURL: "https://medicalassistentapp.firebaseio.com",
//     projectId: "medicalassistentapp",
//     storageBucket: "medicalassistentapp.appspot.com",
//     messagingSenderId: "575160671195"
//     });
//   }

// state = {
//     login: false
//   };
// onLogin = () => {firebase.auth().onAuthStateChanged(function(user){
//         if(user) this.state.login.setState(true);
//         else this.state.login.setState(false);
//   });
//   }
// onRenderMainScreen() {
//     if (this.state.login) {
//       return <TabRouter />
//     }
//     return (
//       <LoginStack />
//     );
//   }
//   render() {
//     return (
//       this.onLogin,
//       this.onRenderMainScreen()
//       //  <LoginStack />
//     );
//   }

// }

// export default App;