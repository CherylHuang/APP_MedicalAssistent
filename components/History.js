import React, { Component } from 'react';
import { ScrollView,Text,Button } from 'react-native';
import { List, ListItem,Card, } from 'react-native-elements';

import medicine from '../json/historymedicine.json';

// Make a component
class History extends Component {
  state = { medicine: [] };

  componentWillMount() {
    this.setState({ medicine });
  }
  

  render() {
    
  return (
      <ScrollView>
        <Button
        title='全部 '
        large
        iconRight
        icon={{name:'arrow-drop-down'}}
        color='black'
        style={{marginTop: 5,flex:1,flexDirection:'column',justifyContent:'flex-start'}}
        fontSize= "10"  //好像沒用
          
          />
      
          
      
        <Card title='4/16(日)'containerStyle={{borderRadius:10}}>
         <Card title='8:30'containerStyle={{margin: 0,borderWidth:0}} >
          <ListItem
            title={this.state.medicine.name416.time830.m1}
            hideChevron
          />
          <ListItem
            title={this.state.medicine.name416.time830.m2}
            hideChevron
          />
         
          </Card>
          <Card title='12:50'containerStyle={{margin: 0,marginTop: 5,borderWidth:0}} >
          <ListItem
            title={this.state.medicine.name416.time1230.m1}
            hideChevron
          />
          </Card>
          <Card title='20:00'containerStyle={{margin: 0,marginTop: 5,borderWidth:0}} >
          <ListItem
            title={this.state.medicine.name416.time2000.m1}
            hideChevron
          />
          </Card>
        </Card>


  <Card title='4/17(一)'containerStyle={{borderRadius:10}}>
        <Card title='8:30'containerStyle={{margin: 0,borderWidth:0}}>
          <ListItem
            title={this.state.medicine.name417.time830.m1}
            hideChevron
          />
           <ListItem
            title={this.state.medicine.name417.time830.m2}
            hideChevron
          />
          </Card>
          <Card title='13:00'containerStyle={{margin: 0,marginTop: 5,borderWidth:0}} >
          <ListItem
            title={this.state.medicine.name417.time2030.m1}
            hideChevron
          />
         
          </Card>
        </Card>
      
        {/*<List>
          <ListItem
            title="Sign Out"
            rightIcon={{ name: 'cancel' }}
          />
        </List>*/}
      </ScrollView>
  );
};
}
export default History;
