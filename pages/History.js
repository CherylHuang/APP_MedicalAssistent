import React, { Component } from 'react';
import { ScrollView,Text,Button, View, SegmentedControlIOS } from 'react-native';
import { List, ListItem,Card, Icon } from 'react-native-elements';

import medicine from '../json/historymedicine.json';

// Make a component
class History extends Component {
  state = { medicine: [] };

  componentWillMount() {
    this.setState({ medicine });
  }
  

  render() {
  const { container, direction, text, seg, icon } = styles;
  return (
    <View>
          <View style={[container, direction]}>
              <View style={[direction, icon]}>
                <Text style={text}>全部</Text>
                <Icon name='arrow-drop-down' />
              </View>
              <View style={[seg]}>
                <SegmentedControlIOS values={['日期', '名稱']}  selectedIndex={0}
                marginBottom={5} marginTop={5} marginRight={5}
                width={100}
                />
              </View>
          </View>
      <ScrollView>          
      
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
    </View>
  );
};
}

const styles = {
    direction:{
      flexDirection:'row'
    },
    container:{
      backgroundColor:'rgba(0,0,0,0)'
    },
    text:{
      fontSize:15,
      paddingLeft:10
    },
    seg:{
      flexDirection:'column',
      alignSelf:'center'
    },
    icon:{
      flex:1,
      alignItems:'center'
    }
};

export default History;
