import React, { Component } from 'react';
import { View, Picker, ActivityIndicator, ScrollView, Text } from 'react-native';
import * as firebase from 'firebase';

import { FormLabel, FormInput, Button, CheckBox } from 'react-native-elements';

// Make a component
class NewUserScreen extends Component {
  state = {
    email: null,
    password: null,
    saving: false,
    error: ' ',
  };

  onSaveInfo = async () => {
    const { email, password } = this.state;
    this.setState({ saving: true });
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      
      const { currentUser } = firebase.auth();
      let dbUserid = firebase.database().ref(`/users/${currentUser.uid}`);
      await dbUserid.set({ email });

      // this.props.navigation.navigate('AccountStack');
      this.setState({ saving: false });
    } catch (err) {
      this.setState({
        email: '',
        password: '',
        error: err.message,
        saving: false
      });
    }
  }

  renderButton() {
    if (this.state.saving) {
      return <ActivityIndicator size='large' style={{marginTop:30}} />;
    }

    return (
      <Button
        title='Sign up'
        onPress={this.onSaveInfo}
        backgroundColor='#4AAF4C'
        buttonStyle = {{marginTop:30}}
      />
    );
  }

  onCancel = () => {
    this.props.navigation.navigate('LoginScreen');
  }

  render() {
    console.log(this.state);
    return (
      <ScrollView>
      <View style={styles.formStyle}>
        <FormLabel>Email</FormLabel>
        <FormInput
          placeholder='user@email.com'
          autoCorrect={false}
          autoCapitalize='none'
          keyboardType='email-address'
          onChangeText={email => this.setState({ email })}
        />
        <FormLabel>Password</FormLabel>
          <FormInput
            secureTextEntry
            autoCorrect={false}
            autoCapitalize='none'
            placeholder='password'
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />

        {this.renderButton()}

        <Text
           style={styles.textCancel}
           onPress={this.onCancel}>
                Cancel
           </Text>

      </View>
      </ScrollView>
    );
  }
}

const styles = {
  formStyle: {
    marginTop: 50
  },
  pickerStyle:{
    marginTop:-30,
    marginBottom:-30
  },
  textCancel:{
    color:'#bbbbbb',
    textDecorationLine:'underline',
    alignSelf:"center",
    fontSize:15,
    marginTop:30,
    marginBottom:50
  }
};

export default NewUserScreen;