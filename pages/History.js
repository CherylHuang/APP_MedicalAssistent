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
    <View style={{flex:1}}>
          <View style={[container, direction]}>
              <View style={[direction, icon]}>
                <Text style={text}>全部</Text>
                <Icon name='arrow-drop-down' color='#517fa4' />
              </View>
              <View style={[seg]}>
                <SegmentedControlIOS values={['最新', '最舊']}  selectedIndex={0}
                marginBottom={5} marginTop={5} marginRight={5} tintColor="#517fa4"
                width={100}
                />
              </View>
          </View>
      <ScrollView>          
      
        <Card title='4/16(日)'titleStyle={{fontWeight:'light',padding:10,marginBottom:0,backgroundColor:"#517fa4",borderRadius:10,height:38,color:"#ffffff" ,fontSize:22}} containerStyle={{borderRadius:10 ,backgroundColor:"#b9d0e3"}}>
         <Card title='8:30' titleStyle={{fontSize:20 }} containerStyle={{margin: 0,borderWidth:0,borderRadius:10}} >
          <ListItem
            title={this.state.medicine.name416.time830.m1}
            titleStyle={{fontSize:20}}
            hideChevron
            leftIcon={{name: 'check',size:25,color:"#6eb372"}}
          />
          <ListItem
            title={this.state.medicine.name416.time830.m2}
            titleStyle={{fontSize:20 }}
            hideChevron
            leftIcon={{name: 'check',size:25,color:"#6eb372"}}
          />
         
          </Card>
          <Card title='12:50' titleStyle={{fontSize:20 }} containerStyle={{margin: 0,marginTop: 5,borderWidth:0,borderRadius:10}} >
          <ListItem
            title={this.state.medicine.name416.time1230.m1}
            titleStyle={{fontSize:20 }}
            hideChevron
            leftIcon={{name: 'close',size:25,color:"#d95858"}}
          />
          </Card>
          <Card title='20:00'titleStyle={{fontSize:16 }} containerStyle={{margin: 0,marginTop: 5,borderWidth:0,borderRadius:10}} >
          <ListItem
            title={this.state.medicine.name416.time2000.m1}
            titleStyle={{fontSize:20 }}
            hideChevron
            leftIcon={{name: 'check',size:25,color:"#6eb372"}}
          />
          </Card>
        </Card>


  <Card title='4/17(一)'titleStyle={{fontWeight:'light',padding:10,marginBottom:0,backgroundColor:"#517fa4",borderRadius:10,height:38,color:"#ffffff" ,fontSize:22}} containerStyle={{borderRadius:10,backgroundColor:"#b9d0e3" }}>
        <Card title='8:30' titleStyle={{fontSize:20 }} containerStyle={{margin: 0,borderWidth:0,borderRadius:10}}>
          <ListItem
            title={this.state.medicine.name417.time830.m1}
            titleStyle={{fontSize:20 }}
            hideChevron
            leftIcon={{name: 'check',size:25,color:"#6eb372"}}
          />
           <ListItem
            title={this.state.medicine.name417.time830.m2}
            titleStyle={{fontSize:20 }}
            hideChevron
            leftIcon={{name: 'close',size:25,color:"#d95858"}}
          />
          </Card>
          <Card title='13:00' titleStyle={{fontSize:16 }} containerStyle={{margin: 0,marginTop: 5,borderWidth:0,borderRadius:10}} >
          <ListItem
            title={this.state.medicine.name417.time2030.m1}
            titleStyle={{fontSize:20 }}
            hideChevron
            leftIcon={{name: 'check',size:25,color:"#6eb372"}}
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
      paddingLeft:10,
      color:'#517fa4'
      
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
