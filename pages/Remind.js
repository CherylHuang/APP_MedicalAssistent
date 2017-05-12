import React, { Component } from 'react';
import { ScrollView, Text, View, SegmentedControlIOS, TouchableHighlight } from 'react-native';
import { List, ListItem, Icon } from 'react-native-elements';
import CheckBox from 'react-native-icon-checkbox';

import clock from '../json/clock.json';
import timetable from '../json/timetable.json';

// Make a component
class Reminder extends Component {
  state = { 
      clock: [],
      timetable: [],
      value: ''
   };

  componentWillMount() {
    this.setState({ clock, timetable });
  }

  goToPageTwo = (ck) => {
    this.props.navigation.navigate('ClockDetails', { ...ck });
  };

// checkbox
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


//SegmentedControlIOS
_onValueChange = (value) => {
    this.setState({
      value: value,
    });
  };

renderListView = (val) => {
     const { checkbox, directionRow, clockContain, clockbox,
     alignItemCenter, list, AM_PM_text, time, directionCol, medi, week,
     chevron, info } = styles;

    if (val === '時刻表') {
      return (
        <ScrollView>
          <List containerStyle={{marginTop: 0,paddingBottom: 0}}>

           {this.state.timetable.map((tt) => (
             <View style={{position:'relative'}}>
                <Icon type='material-community' name='table-large' color='#517fa4'
                            size={40} position='absolute'
                            marginTop={11} marginLeft={11} />
                <ListItem
                  containerStyle={{paddingLeft:40}}
                  title={tt.title} titleStyle={{fontSize:18, margin:2.5}}
                  subtitle={tt.tag} subtitleStyle={{fontSize:14, margin:2.5}}
                />
             </View>
          ))}

          </List>
        </ScrollView>
        )
    } else {
      return (
      <ScrollView>
        <List containerStyle={{marginTop: 0,paddingBottom: 0}}>
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

                <TouchableHighlight style={{flex:1}}
                onPress={() => this.goToPageTwo(ck)}>

                  <View style={[clockContain, directionRow, alignItemCenter]}>

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

                </TouchableHighlight>

          </View>
          ))}
        </List>
     </ScrollView>
        )
    }
  };


  render() {
    return (
    <View>
        <View style={{backgroundColor:"white"}}>
          <SegmentedControlIOS values={['鬧鐘','時刻表']} value={'鬧鐘'}
            onValueChange={this._onValueChange}
            selectedIndex={0} tintColor="#517fa4"
            marginTop={5} marginBottom={5}
            marginLeft={30} marginRight={30}
          />
        </View>
            {this.renderListView(this.state.value)}
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
        width: 55,
        marginLeft: 15
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
    flex:1.4
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