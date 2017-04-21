import React, { Component } from 'react';
import { ScrollView,View,Image } from 'react-native';
import { Tile, List, ListItem,Avatar,Icon } from 'react-native-elements';

import me from '../json/me.json';

// Make a component
class Account extends Component {
  state = { me: [] };

  componentWillMount() {
    this.setState({ me });
  }
  

  render() {
    
    return (
      <View >

        <Avatar
          xlarge
          rounded
          source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg"}}

          containerStyle={{flex: 5,marginLeft: 90, marginTop: 27,marginBottom:137}}
        />

        <List >
       
          <ListItem
            //imageSrc={require('../assets/icon_alarm.png')}
            //leftIcon={require('../assets/icon_alarm.png')}
            title="藥物數量"
            titleStyle={{fontSize:20}}
            rightTitle={this.state.me.medicine}
            rightTitleStyle={{fontSize:20}}
            //containerStyle={{flex: 1,height:30}}
            leftIcon={{name: 'group-work',size:15,color:'#517fa4'}}
            hideChevron
          />
          <ListItem
            title="鬧鐘數量"
            titleStyle={{fontSize:20}}
            rightTitle={this.state.me.alarm}
            rightTitleStyle={{fontSize:20}}
            leftIcon={{name: 'alarm',size:15,color:'#517fa4'}}
            hideChevron
          />
          <ListItem
            title="密碼"
            titleStyle={{fontSize:20}}
            rightTitle={this.state.me.password}
            rightTitleStyle={{fontSize:20}}
            leftIcon={{name: 'lock',size:15,color:'#517fa4'}}
            hideChevron
          />

         
        </List>

       
      </View>
    );
  }
}
styles = {

  

}

export default Account;