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
      const {checkbox, titlestyle, textstyle,textstyle2} = styles;
    return (
      <ScrollView>
        <View style={titlestyle}>   
        <Text style={textstyle}>4 / 17<Text style={textstyle2}>(一)</Text></Text>
        </View>
  <Card containerStyle={{borderRadius:10,backgroundColor:"#b9d0e3" }}>
        <Card title='8:30' titleStyle={{fontSize:20 }} containerStyle={{margin: 0,borderWidth:0,borderRadius:10}}>
         
         <View style={[checkbox]}>
                <CheckBox
                label={this.state.medicine.name417.time830.m1}
                size={30} color='#517fa4'
                checked={this.state.isChecked}
                onPress={this.handlePressCheckedBox}
                labelStyle={{fontSize:20}}
                />
        </View>
        <View style={[checkbox]}>
                <CheckBox
                label={this.state.medicine.name417.time830.m2}
                size={30} color='#517fa4'
                checked={this.state.isChecked}
                onPress={this.handlePressCheckedBox}
                labelStyle={{fontSize:20}}
                />
        </View>

          </Card>
          <Card title='13:00' titleStyle={{fontSize:20 }} containerStyle={{margin: 0,marginTop: 5,borderWidth:0,borderRadius:10}} >
            <View style={[checkbox]}>
                <CheckBox
                label={this.state.medicine.name417.time2030.m1}
                size={30} color='#517fa4'
                checked={this.state.isChecked}
                onPress={this.handlePressCheckedBox}
                labelStyle={{fontSize:20}}
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
    fontSize: 55,
    fontFamily: 'AppleSDGothicNeo-Light',
  },
   textstyle2: {
    fontSize: 25,
   
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
