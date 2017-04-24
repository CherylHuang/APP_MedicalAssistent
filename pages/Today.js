import React, { Component } from 'react';
import { ScrollView ,Text,Button,StyleSheet,View } from 'react-native';
import { Tile, List, ListItem,Card } from 'react-native-elements';
import CheckBox from 'react-native-icon-checkbox';

import medicine from '../json/historymedicine.json';

// Make a component
class Today extends Component {
  state = { medicine: [] };

  componentWillMount() {
    this.setState({ medicine });
  }

  //checkbox
constructor(props) {
    super(props);
    this.state = {
      isChecked: false,
    };
  }
handlePressCheckedBox = (checked) => {
    this.setState({
      isChecked: checked,
    });
}

  render() {
      const {checkbox, titlestyle, textstyle} = styles;
    return (
      <ScrollView>
        <View style={titlestyle}>   
        <Text style={textstyle}>4/17(一)</Text>
        </View>
  <Card containerStyle={{borderRadius:10}}>
        <Card title='8:30'containerStyle={{margin: 0,borderWidth:0}}>
         
         <View style={[checkbox]}>
                <CheckBox
                label={this.state.medicine.name417.time830.m1}
                size={30} color='#517fa4'
                checked={this.state.isChecked}
                onPress={this.handlePressCheckedBox}
                />
        </View>
        <View style={[checkbox]}>
                <CheckBox
                label={this.state.medicine.name417.time830.m2}
                size={30} color='#517fa4'
                checked={this.state.isChecked}
                onPress={this.handlePressCheckedBox}
                />
        </View>

          </Card>
          <Card title='13:00'containerStyle={{margin: 0,marginTop: 5,borderWidth:0}} >
            <View style={[checkbox]}>
                <CheckBox
                label={this.state.medicine.name417.time2030.m1}
                size={30} color='#517fa4'
                checked={this.state.isChecked}
                onPress={this.handlePressCheckedBox}
                />
              </View>
                    
          </Card>
        </Card>

      </ScrollView>
    );
  }
}
const styles = {
  textstyle: {
    fontSize: 30,
    
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

export default Today;
