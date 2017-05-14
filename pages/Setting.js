import React, { Component } from 'react';
import { ScrollView ,Text,Button,StyleSheet,View } from 'react-native';
import { List, ListItem } from 'react-native-elements';

import me from '../json/me.json';

// Make a component
class Setting extends Component {

  state = { me: [] };

  componentWillMount() {
    this.setState({ me });
  }

  goToPageAccount = (acco) => {
    this.props.navigation.navigate('Account', { ...acco });
  };
  goToEditPassword= () => {
    this.props.navigation.navigate('EditPassword');
  };

  render() {
      const {checkbox, titlestyle, textstyle,textstyle2} = styles;
    return (
      <ScrollView>
        <List containerStyle={{marginTop: 0}}>
            <ListItem 
              title="我的資訊"
              titleStyle = {{color:'#929292', fontSize:15}}
              hideChevron
            />
            <ListItem 
              title="我的帳戶"
              titleStyle = {{fontSize:18}}
              roundAvatar
              avatar={{ uri: this.state.me.img }}
              onPress={() => this.goToPageAccount(this.state.me)}
            />
        </List>
        <List>
            <ListItem 
              title="提醒設定"
              titleStyle = {{color:'#929292', fontSize:15}}
              hideChevron
            />
            <ListItem 
            title="提醒開關"
            hideChevron
            switchButton
            titleStyle = {{fontSize:18}}
            leftIcon={{name: 'announcement',color:'#517fa4'}}
            />
            <ListItem 
            title="震動開關"
            hideChevron
            switchButton
            titleStyle = {{fontSize:18}}
            leftIcon={{name: 'vibration',color:'#517fa4'}}
            />
            <ListItem
            title="鈴聲開關"
            hideChevron
            switchButton
            titleStyle = {{fontSize:18}}
            leftIcon={{name: 'volume-up',color:'#517fa4'}}
            />
            <ListItem 
            title="提醒方式"
            titleStyle = {{fontSize:18, paddingLeft:2}}
            rightTitle = "提醒框"
            leftIcon={{name: 'alarm',color:'#517fa4'}}
            rightTitleContainerStyle = {{flex:0}}
            containerStyle = {{paddingLeft:2}}
            />
            <ListItem 
            title="延後提醒"
            titleStyle = {{fontSize:18, paddingLeft:2}}
            rightTitle = "OFF"
            leftIcon={{name: 'restore',color:'#517fa4'}}
            rightTitleContainerStyle = {{flex:0}}
            containerStyle = {{paddingLeft:2}}
            />
        </List>
        <List containerStyle={{marginBottom:20}}>
            <ListItem 
              title="密碼設定"
              titleStyle = {{color:'#929292', fontSize:15}}
              hideChevron
            />
            <ListItem
            title="密碼開關"
            titleStyle = {{fontSize:18}}
            hideChevron
            switchButton
            leftIcon={{name: 'lock',color:'#517fa4'}}
            />
            <ListItem 
            title="密碼設定"
            titleStyle = {{fontSize:18}}
            leftIcon={{name: 'vpn-key',color:'#517fa4'}}
            onPress={this.goToEditPassword}
            />
        </List>
      </ScrollView>
    );
  }
}
const styles = {
  textstyle: {
    fontSize: 55,
    fontFamily: 'AppleSDGothicNeo-Light',
  },
   textstyle2: {
    fontSize: 25,
   
  },
  titlestyle:{
    marginTop:40,
    marginBottom:15,
    alignItems: 'center',
  },
    checkbox: {
        marginLeft: 10,
        flexDirection:'row'
    }
};

export default Setting;
