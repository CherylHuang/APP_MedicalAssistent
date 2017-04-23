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
          img,
          subeffect
  } = props.navigation.state.params;

    const { icon, AMPM, time, contain, directionRow, directionCol } = styles;

    return (
      <ScrollView>
        <View style={directionCol}>
          <View style={[directionRow, contain]}>
            <Icon name='alarm' size={65} color={color}
                  containerStyle={{paddingRight:5}}/>
            <Text style={[AMPM, {color:color}]}>{AMorPM}</Text>
            <Text style={[time, {color:color}]}>{timeHour}:{timeMinute}</Text>
          </View>
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
            <ListItem
              key="medicine"
              roundAvatar
              avatar={{ uri: img }}
              avatarStyle={{width:55, height:55, marginLeft:30}}
              title={`${medicine} / ${amount}${amountWord}`}
              titleStyle={{fontSize:20, paddingBottom:3}}
              subtitle={`副作用: ${subeffect}`}
              subtitleStyle={{fontSize:15}}
              /*onPress={() => this.goToPageTwo(medi)}*/
            />
        </List>
     </ScrollView>
    );
  }

const styles = {
  directionRow:{
      flexDirection:'row'
  },
  directionCol:{
    flexDirection:'column',
    alignItems:'center'
  },
  contain:{
    flex:1,
    alignItems:'center'
  },
  icon:{
    width:150,
    height:150,
    borderRadius:75,
    marginTop:30
  },
  AMPM:{
    fontSize:22,
    paddingTop:15
  },
  time:{
    fontSize:55,
    paddingTop:15
  }
};

export default ClockDetails;
