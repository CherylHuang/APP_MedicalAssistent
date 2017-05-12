import React from 'react';
import { TabRouter } from './Router';


const App = () => (
      <TabRouter />
   );

export default App;

// import React, { Component } from 'react';
// import * as firebase from 'firebase';
// import { LoginStack } from './Router2';

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

//   render() {
//     return (
//       <LoginStack />
//     );
//   }
// }


// export default App;