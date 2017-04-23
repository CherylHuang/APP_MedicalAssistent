import React, { Component } from 'react';
import { ScrollView, Text, View, Image } from 'react-native';
import { List, ListItem, Icon, Grid, Col, Row } from 'react-native-elements';

// Make a component
const ClockDetails = (props) => {
  const { AMorPM, 
          timeHour,
          timeMinute,
          sound,
          form,
          medicine,
          amount,
          amountWord,
          color,
  } = props.navigation.state.params;

    const { icon, name, directionRow } = styles;

    return (
      <ScrollView>

          <View style={directionRow}>
            <Icon name='alarm' />
            <Text style={[name, {color:color}]}>{AMorPM}</Text>
            <Text style={[name, {color:color}]}>{timeHour}:{timeMinute}</Text>
          </View>

        <List>
            <ListItem
              key="repeat"
              title="重複"
              titleStyle={{fontSize:20}}
              rightTitle="永不"
              rightTitleStyle={{fontSize:17}}
              hideChevron
            />
            <ListItem
              key="sound"
              title="鈴聲"
              titleStyle={{fontSize:20}}
              rightTitle={`${sound}`}
              rightTitleStyle={{fontSize:17}}
              hideChevron
            />
            <ListItem
              key="form"
              title="時刻表"
              titleStyle={{fontSize:20}}
              rightTitle="課表/班表"
              rightTitleStyle={{fontSize:17}}
              hideChevron
            />
            <ListItem
              key="medicine/number"
              title="藥品/數量"
              titleStyle={{fontSize:20}}
              hideChevron
            />
        </List>
     </ScrollView>
    );
  }

const styles = {
  directionRow:{
      flexDirection:'row'
  },
  icon:{
    width:150,
    height:150,
    borderRadius:75,
    marginTop:30
  },
  name:{
    fontSize:20,
    paddingTop:15
  }
};

export default ClockDetails;
