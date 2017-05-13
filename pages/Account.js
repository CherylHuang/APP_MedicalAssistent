import React, { Component } from 'react';
import { View, Image, Text, ScrollView } from 'react-native';
import { List, ListItem, Icon } from 'react-native-elements';

import me from '../json/me.json';

// Make a component
class Account extends Component {
  state = { me: [] };

  componentWillMount() {
    this.setState({ me });
  }

  render() {
        const { img, name } = styles;
    return (
      <ScrollView>
          <View>
            <Image source={{uri: this.state.me.img}} 
            style={img}
            />
            <Text style={name}>{this.state.me.name}</Text>
          </View>

        <List>
          <ListItem
            key={this.state.me.email}
            title="帳號信箱"
            titleStyle={{fontSize:20}}
            subtitle={this.state.me.email}
            subtitleStyle={{fontSize:15, marginTop:2}}
            leftIcon={{name: 'email',color:'#517fa4'}}
            hideChevron
            rightTitleContainerStyle = {{flex:0}}
          />
          <ListItem
            //imageSrc={require('../assets/icon_alarm.png')}
            //leftIcon={require('../assets/icon_alarm.png')}
            key={this.state.me.name}
            title="藥物數量"
            titleStyle={{fontSize:20}}
            rightTitle={this.state.me.medicine}
            rightTitleStyle={{fontSize:20}}
            //containerStyle={{flex: 1,height:30}}
            leftIcon={{type:'material-community', name: 'view-grid',color:'#517fa4'}}
            hideChevron
            rightTitleContainerStyle = {{flex:0}}
          />
          <ListItem
            key={this.state.me.alarm}
            title="鬧鐘數量"
            titleStyle={{fontSize:20}}
            rightTitle={this.state.me.alarm}
            rightTitleStyle={{fontSize:20}}
            leftIcon={{name: 'alarm',color:'#517fa4'}}
            hideChevron
            rightTitleContainerStyle = {{flex:0}}
          />
        </List>


        <List containerStyle={{marginBottom:20}}>
           <ListItem
            title="登出"
            titleStyle={{fontSize:20,color:'red'}}
            leftIcon={{type:'simple-line-icon', name: 'logout',color:'red'}}
            hideChevron
            rightTitleContainerStyle = {{flex:0}}
          />
        </List>
       
      </ScrollView>
    );
  }
}
const styles = {
  img:{
    alignSelf:'center',
    width:150,
    height:150,
    borderRadius:75,
    marginTop:30
  },
  name:{
    alignSelf:'center',
    fontSize:20,
    paddingTop:15
  }
}

export default Account;