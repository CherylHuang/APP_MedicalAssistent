import React, { Component } from 'react';
import { ScrollView ,Text,Button,StyleSheet,View, Picker } from 'react-native';
import { List, ListItem } from 'react-native-elements';

import clock from '../json/clock.json';

const hours = ['1','2','3','4','5','6','7','8','9','10','11','12'];
const minutes = ['00','01','02','03','04','05','06','07','08','09',
                 '10','11','12','13','14','15','16','17','18','19',
                 '20','21','22','23','24','25','26','27','28','29',
                 '30','31','32','33','34','35','36','37','38','39',
                 '40','41','42','43','44','45','46','47','48','49',
                 '50','51','52','53','54','55','56','57','58','59',];

// Make a component
class EditClock extends Component {

  state = { 
      clock: [],
      ampm: "am",
      hour:"11",
      minute:"00"
   };

  componentWillMount() {
    this.setState({ clock });
  }

  render() {
      const {directionRow, alignItemCenter, picker, pickercontain, medilist} = styles;
    return (
        <ScrollView>
          <View style={{pickercontain}}>
                    <Picker
                    style={[picker]}
                    selectedValue={this.state.ampm}
                    onValueChange={ampm => this.setState({ ampm })}
                        >
                        <Picker.Item label="上午" value="am" />
                        <Picker.Item label="下午" value="pm" />
                    </Picker>
                    <Picker
                    style={[picker, {marginLeft:100}]}
                    selectedValue={this.state.hour}
                    onValueChange={hour => this.setState({ hour })}
                        >
                        {hours.map((hrs)=>(
                            <Picker.Item label={hrs} value={hrs} />
                        ))}
                    </Picker>
                    <Picker
                    style={[picker, {marginLeft:200}]}
                    selectedValue={this.state.minute}
                    onValueChange={minute => this.setState({ minute })}
                        >
                        {minutes.map((min)=>(
                            <Picker.Item label={min} value={min} />
                        ))}
                    </Picker>
          </View>
        <List containerStyle={{marginTop: 220,paddingBottom: 0}}>
            <ListItem
              key="repeat"
              title="重複"
              titleStyle={{fontSize:18}}
              rightTitle="永不"
              rightTitleStyle={{fontSize:15}}
            />
            <ListItem
              key="sound"
              title="鈴聲"
              titleStyle={{fontSize:18}}
              rightTitle='治感冒咒'
              rightTitleStyle={{fontSize:15}}
            />
            <ListItem
              key="form"
              title="加入時刻表"
              titleStyle={{fontSize:18}}
              rightTitle="課表/班表"
              rightTitleStyle={{fontSize:15}}
            />
            <ListItem
              key="delay"
              title="延後提醒"
              titleStyle={{fontSize:18}}
              rightTitle='ON'
              rightTitleStyle={{fontSize:15}}
              hideChevron
              switchButton
              switched
            />
            <ListItem
              key="medicine/number"
              title="藥品/數量"
              titleStyle={{fontSize:18}}
              containerStyle={{borderTopWidth:1, borderColor:'#868686'}}
            />
            <View style={medilist}>
                <ListItem
                key="medicine"
                title='感冒藥 / 2顆'
                titleStyle={{fontSize:18, paddingBottom:3}}
                /*onPress={() => this.goToPageTwo(medi)}*/
                hideChevron
                />
                <ListItem
                key="medicine2"
                title="胃藥 / 1顆"
                titleStyle={{fontSize:18, paddingBottom:3}}
                /*onPress={() => this.goToPageTwo(medi)}*/
                hideChevron
                />
            </View>
        </List>
    </ScrollView>
    );
  }
}
const styles = {
  directionRow:{
    flexDirection:'row'
  },
 alignItemCenter:{
    alignItems:'center'
  },
//   pickercontain:{
//     flex:1,
//     position:'relative',
//     zindex:1,
//     alignSelf:'center',
//     marginLeft:10
//   },
  picker:{
    width:100,
    position:'absolute',
    marginLeft:15
  },
  medilist:{
      marginLeft:30
  }
};

export default EditClock;