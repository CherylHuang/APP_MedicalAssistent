import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import { List, ListItem, Icon } from 'react-native-elements';

import me from '../json/me.json';

// Make a component
class Today extends Component {
  state = { me: [] };

  componentWillMount() {
    this.setState({ me });
  }

  render() {
        const { img, name } = styles;
    return (
      <View>
          <View>
            <Image source={{uri: this.state.me.img}} 
            style={img}
            />
            <Text style={name}>{this.state.me.name}</Text>
          </View>

        <List>
          <ListItem
            //imageSrc={require('../assets/icon_alarm.png')}
            //leftIcon={require('../assets/icon_alarm.png')}
            key={this.state.me.name}
            title="藥物數量"
            titleStyle={{fontSize:20}}
            rightTitle={this.state.me.medicine}
            rightTitleStyle={{fontSize:20}}
            //containerStyle={{flex: 1,height:30}}
            leftIcon={{name: 'group-work',color:'#517fa4'}}
            hideChevron
          />
          <ListItem
            key={this.state.me.alarm}
            title="鬧鐘數量"
            titleStyle={{fontSize:20}}
            rightTitle={this.state.me.alarm}
            rightTitleStyle={{fontSize:20}}
            leftIcon={{name: 'alarm',color:'#517fa4'}}
            hideChevron
          />
          <ListItem
            key={this.state.me.password}
            title="密碼"
            titleStyle={{fontSize:20}}
            rightTitle={this.state.me.password}
            rightTitleStyle={{fontSize:20}}
            leftIcon={{name: 'lock',color:'#517fa4'}}
            hideChevron
          />
    
        </List>
       
      </View>
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

export default Today;