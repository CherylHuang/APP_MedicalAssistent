import React, { Component } from 'react';
import { ScrollView, Text, View, SegmentedControlIOS } from 'react-native';
import { List, Icon } from 'react-native-elements';
import CheckBox from 'react-native-icon-checkbox';

import clock from '../json/clock.json';

// Make a component
class Reminder extends Component {
  state = { clock: [] };

  componentWillMount() {
    this.setState({ clock });
  }

  goToPageTwo = (ck) => {
    this.props.navigation.navigate('ClockDetails', { ...ck });
  };

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
     const { checkbox, directionRow, clockContain, clockbox,
     alignItemCenter, list, AM_PM_text, time, directionCol, medi, week,
     chevron, info } = styles;

    return (
    <View>
        <View style={{backgroundColor:"white"}}>
          <SegmentedControlIOS values={['鬧鐘', '時刻表']} 
          selectedIndex={0} marginTop={5} marginBottom={5}
          marginLeft={30} marginRight={30} tintColor="#517fa4"
          />
        </View>
      <ScrollView>
        <List containerStyle={{marginTop: 0,paddingBottom: 40}}>
          {this.state.clock.map((ck) => (
            <View style={[list, directionRow, alignItemCenter]} >
                <View style={[checkbox]}>
                    <CheckBox
                    size={30}
                    checked={this.state.isChecked}
                    color='#517fa4'
                    onPress={this.handlePressCheckedBox}
                    />
                </View>

                  <View style={[clockContain, directionRow, alignItemCenter]}
                  onTouchEnd={() => this.goToPageTwo(ck)}>

                    <View style={[clockbox, directionRow, alignItemCenter]}>
                      <Text style={[AM_PM_text]}>
                        {ck.AMorPM}</Text>
                      <Text style={[time]}>
                        {ck.timeHour}:{ck.timeMinute}</Text>
                    </View>
                    <View style={[info]}>
                      <Text style={medi}>
                        {ck.medicine} / {ck.amount}{ck.amountWord}</Text>
                      <Text style={week}>日 一 二 三 四 五 六</Text>
                    </View>
                    <View style={[directionRow, chevron]}>
                        <Icon name='chevron-right' size={28} color='#bdc6cf' />
                    </View>

                </View>

          </View>
          ))}
        </List>
     </ScrollView>
    </View>
    );
  }

}

const styles = {
  directionRow:{
    flexDirection:'row'
  },
  directionCol:{
    flexDirection:'column'
  },
  alignItemCenter:{
    alignItems:'center'
  },
  list:{
    flex:1,
    borderBottomWidth:1,
    borderColor:'#eeeeee',
  },
    checkbox: {
        width: 50,
        marginLeft: 10
    },
  clockContain:{
    marginLeft:5,
    marginRight:5,
    marginTop:10,
    marginBottom:10,
    flex:1
  },
  clockbox:{
    flex:1,
    padding:10,
    marginLeft:-20,
    marginRight:5,
    backgroundColor: '#d4d4d4',
    borderRadius:5
  },
  info:{
    flex:1.5
  },
  AM_PM_text:{
    marginRight:5,
    marginBottom:3,
    alignSelf:'flex-end',
    flex:0.3
  },
  time:{
    fontSize:24,
    flex:1
  },
  medi:{
    fontSize:18,
    margin:2.5
  },
  week:{
    fontSize:12,
    color:'#d4d4d4',
    margin:2.5
  },
  chevron:{
    flex:0.3
  }
};

export default Reminder;