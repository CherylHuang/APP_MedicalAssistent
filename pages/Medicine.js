import React, { Component } from 'react';
import { ScrollView, Text, View, SegmentedControlIOS } from 'react-native';
import { List, ListItem, Icon } from 'react-native-elements';

import medicine from '../json/medicine.json';

// Make a component
class Medicine extends Component {
  state = { medicine: [] };

  componentWillMount() {
    this.setState({ medicine });
  }

  goToPageTwo = (medi) => {
    this.props.navigation.navigate('MedicineDetails', { ...medi });
  };

  render() {
    const { container, direction, text, seg, icon } = styles;
    return (
    <View style={{flex:1}}>
          <View style={[container, direction]}>
              <View style={[direction, icon]}>
                <Text style={text}>全部</Text>
                <Icon name='arrow-drop-down' color='#517fa4' />
              </View>
          </View>
      <ScrollView>
        <List containerStyle={{marginTop: 0}}>
          {this.state.medicine.map((medi) => (
            <ListItem
              key={medi.title}
              roundAvatar
              avatar={{ uri: medi.image }}
              avatarStyle={{
                width:100, height:100,
                }}
              title={medi.title}
              titleStyle={{
                fontSize:18,
                paddingBottom:5
                }}
              subtitle={medi.effect}
              subtitleStyle={{fontSize:12}}
              onPress={() => this.goToPageTwo(medi)}
            />
          ))}
        </List>
     </ScrollView>
    </View>
    );
  }
}

const styles = {
    direction:{
      flexDirection:'row'
    },
    container:{
      backgroundColor:'white'
    },
    text:{
      fontSize:15,
      paddingLeft:10,
      color:'#517fa4'
    },
    icon:{
      flex:1,
      alignItems:'center'
    }
};

export default Medicine;