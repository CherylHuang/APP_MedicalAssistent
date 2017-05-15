import React, { Component } from 'react';
import { Text, View, Image,Alert} from 'react-native';
import { Icon,FormInput,FormLabel,Button } from 'react-native-elements';
//import {Password} from 'react-native-input-password';


class EditPassword extends Component {

   state = {
  password:null,
  confirm:null,
};


  onSignIn=() =>{
    const{password,confirm}=this.state;
    if((password) === (confirm)){
       Alert.alert(
            '密碼設定成功!',
            null,
            [
              {text: 'OK', onPress: () => console.log('OK Pressed!')},
            ],
            {
              cancelable: false
            }
          )

    }
    else{
      Alert.alert(
            '確認密碼有誤!',
            null,
            [
              {text: 'OK', onPress: () => console.log('OK Pressed!')},
            ],
            {
              cancelable: false
            }
          )
    }
  }


 
  render() {
    const { state,psaaword } = styles;
    return(
        <View style={{flex:1,marginTop:20}}>
            {/*<Password maxLength={4}></Password>*/}
          <FormLabel >請輸入4位密碼</FormLabel>
          <View style={{flexDirection:'row'}}>  
          <FormInput
            containerStyle={{flex:1,width:200,height:40,backgroundColor:'white'}}
            inputStyle={{fontSize:30}}
            secureTextEntry
            autoCorrect={false}
            autoCapitalize='none'
            placeholder='password'
            value={this.state.password}
            maxLength={4}
            keyboardType='numeric'
            clearTextOnFocus='true'
            onChangeText={password => this.setState({ password })}
            
          />
          </View>
          <FormLabel >確認密碼</FormLabel>
          <View style={{flexDirection:'row'}}>
          <FormInput
            containerStyle={{flex:1,height:40,backgroundColor:'white'}}
            inputStyle={{fontSize:30}}
            secureTextEntry
            autoCorrect={false}
            autoCapitalize='none'
            placeholder='password'
            value={this.state.confirm}
            maxLength={4}
            onChangeText={confirm => this.setState({ confirm })}
            keyboardType='numeric'
            clearTextOnFocus='true'
          />
          </View>
          <Button
          title='確認'
          backgroundColor='#4AAF4C'
          onPress={this.onSignIn}
          buttonStyle={{marginTop:50,borderRadius:5}}
          backgroundColor='#517fa4' 
          textStyle={{fontSize:18,color:"white"}}
          />

        </View>


         );
     }    
      
 }

const styles={
  state:{
    fontSize:35

  },

}

export default EditPassword;