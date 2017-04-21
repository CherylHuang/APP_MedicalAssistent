import React, { Component } from 'react';
import { ScrollView ,Text,Button,StyleSheet,View } from 'react-native';
import { Tile, List, ListItem,Card,CheckBox } from 'react-native-elements';

import medicine from '../json/historymedicine.json';

// Make a component
class Today extends Component {
  state = { medicine: [] };

  componentWillMount() {
    this.setState({ medicine });
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.titlestyle}>   
        <Text style={styles.textstyle}>4/17(一)</Text>
        </View>
  <Card containerStyle={{borderRadius:10}}>
        <Card title='8:30'containerStyle={{margin: 0,borderWidth:0}}>
         
          <CheckBox
            
            title={this.state.medicine.name417.time830.m1}
            checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o'
            checked={this.state.checked}
          />
          <CheckBox
            
            title={this.state.medicine.name417.time830.m2}
            checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o'
            checked={this.state.checked}
          />
          </Card>
          <Card title='13:00'containerStyle={{margin: 0,marginTop: 5,borderWidth:0}} >
            <CheckBox
            title={this.state.medicine.name417.time2030.m1}
            checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o'
            checked={this.state.checked}
          />
        

                    
          </Card>
        </Card>

      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  textstyle: {
    fontSize: 30,
    
  },
  titlestyle:{
    marginTop:40,
    marginBottom:15,
    alignItems: 'center',
  }
});

export default Today;
