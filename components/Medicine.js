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
    this.props.navigation.navigate('Details', { ...medi });
  };

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
        <List containerStyle={{marginTop: 0,paddingBottom: 40}}>
          {this.state.medicine.map((medi) => (
            <ListItem
              key={medi.title}
              roundAvatar
              avatar={{ uri: medi.image }}
              avatarStyle={{
                width:100, height:100,
                borderColor:[medi.color],
                borderWidth:2
                }}
              title={medi.title}
              titleStyle={{
                fontSize:20, color:[medi.color],
                paddingBottom:5
                }}
              subtitle={medi.effect}
              subtitleStyle={{fontSize:15}}
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

export default Medicine;
