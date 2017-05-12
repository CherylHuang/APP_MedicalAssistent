import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import { List, ListItem, Icon,Button } from 'react-native-elements';

import me from '../json/me.json';
import medicine from '../json/historymedicine.json';
// Make a component
class Today extends Component {
  state = { me: [] };

  componentWillMount() {
    this.setState({ me });
  }

  render() {
        const { img, name,date,column,row,box } = styles;
    return (
      <View style={{flex:1}}>
        <View style={row}>

          <View style={box}>
            <Image source={{uri: this.state.me.img}} 
            style={img}
            />
            <View>
            <Text style={name}>{this.state.me.name}</Text>
            </View>
          </View>

          <View style={box}>
            <Text style={date}>4/17(一)</Text>
            <Button 
              title='新增提醒'
              buttonStyle={{marginRight:20}}
              fontSize='18'
              icon={{name: 'add'}}
              backgroundColor='#517fa4'
              color='white'
              borderRadius='12'
             />
          </View>

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
    //alignSelf:'flex-start',
    width:120,
    height:120,
    borderRadius:58,
    marginTop:30,
    //marginLeft:10,
  },
  name:{
    alignSelf:'flex-start',
    fontSize:20,
    paddingTop:15,
    //marginLeft:60,
  },
  date:{
    fontSize:32,
    //alignSelf:'flex-end',
    marginTop:70,
    marginBottom:32,
    flexDirection:'column'
  },
  row:{
    flexDirection:'row',
    
    justifyContent:'center',
  },
  column:{
    flexDirection:'column'
  },
  box:{
    flex:1,
    flexDirection:'column',
    marginLeft:12,
    marginRight:12,
    alignItems:'center'
  }

}

export default Today;