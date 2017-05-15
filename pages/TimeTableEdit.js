import React, { Component } from 'react';
import { ScrollView ,Text ,View } from 'react-native';
import { List, ListItem, Icon } from 'react-native-elements';

import timetable from '../json/timetable.json';

// Make a component
class TimeTableEdit extends Component {

  state = { 
      timetable: []
   };

  componentWillMount() {
    this.setState({ timetable });
  }

  render() {
      const { medilist, title, righttitle } = styles;
    return (
        <ScrollView>

        <List containerStyle={{marginTop:0, paddingBottom: 0}}>
          <ListItem
            title={
            <View style={{flexDirection:'row'}}>
                <Text style={title}>  名稱   </Text>
                <Text style={{fontSize:17, color: '#bdc6cf'}}>105下課表 </Text>
                <Icon name='edit' color='#517fa4' onPress={()=>{}} />
            </View>
                }
            hideChevron
          />
            <ListItem
              key="tag"
              title="標籤"
              titleStyle={title}
              rightTitle='課表'
              rightTitleStyle={righttitle}
            />
            <ListItem
              key="sub-remind"
              title="副作用提醒"
              titleStyle={title}
              hideChevron
              switchButton
              switched
            />
            <ListItem
              key="sub-remind-time"
              title="副作用提醒時段"
              titleStyle={title}
              containerStyle={{borderTopWidth:1, borderColor:'#868686'}}
            />
            <View style={medilist}>
                <ListItem
                key="sub-time1"
                title='星期六,9:05~9:55,10:15~11:05'
                titleStyle={{fontSize:18, paddingBottom:3}}
                /*onPress={() => this.goToPageTwo(medi)}*/
                hideChevron
                />
                <ListItem
                key="sub-time2"
                title="星期日,9:05~9:55,10:15~11:05"
                titleStyle={{fontSize:18, paddingBottom:3}}
                /*onPress={() => this.goToPageTwo(medi)}*/
                hideChevron
                />
            </View>
            <ListItem containerStyle={{borderTopWidth:1, borderColor:'#868686'}}
              key="other"
              title="備註"
              titleStyle={title}
            />
        </List>
    </ScrollView>
    );
  }
}
const styles = {
  medilist:{
      marginLeft:30
  },
  title:{
    fontSize:18
  },
  righttitle:{
    fontSize:15
  }
};

export default TimeTableEdit;