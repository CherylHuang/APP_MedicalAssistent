import React, { Component } from 'react';
import { ScrollView, Text, View, SegmentedControlIOS } from 'react-native';
import { List, ListItem, Icon } from 'react-native-elements';

import clock from '../json/clock.json';

// Make a component
class Reminder extends Component {
  state = { clock: [] };

  componentWillMount() {
    this.setState({ clock });
  }

  goToPageTwo = (medi) => {
    this.props.navigation.navigate('Details', { ...medi });
  };

  render() {
    return (
    <View>
        <View style={{backgroundColor:"white"}}>
          <SegmentedControlIOS values={['鬧鐘', '時刻表']} 
          selectedIndex={0} marginTop={5} marginBottom={5}
          marginLeft={30} marginRight={30}
          />
        </View>
      <ScrollView>
        <List containerStyle={{marginTop: 0,paddingBottom: 40}}>
          {this.state.clock.map((ck) => (
            <ListItem
              key={ck.medicine}
              /*avatar={{ uri: ck.image }}
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
              onPress={() => this.goToPageTwo(medi)}*/
            />
          ))}
        </List>
     </ScrollView>
    </View>
    );
  }
}

export default Reminder;