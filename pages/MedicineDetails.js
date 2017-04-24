import React, { Component } from 'react';
import { ScrollView, Text, View, Image } from 'react-native';
import { List, ListItem, Icon, Grid, Col, Row } from 'react-native-elements';

// Make a component
const MedicineDetails = (props) => {
  const { title, 
          kind,
          time,
          effect,
          subeffect,
          color,
          image,
          icon,
          warn,
          reason,
          other
  } = props.navigation.state.params;

    const { img, name } = styles;

    return (
      <ScrollView>

          <View>
            <Image source={{uri: image}} style={[img]} />
            <Text style={[name]}>{title}</Text>
          </View>

        <List>
            <ListItem
              key="title"
              title="分類"
              titleStyle={{fontSize:20}}
              rightTitle={`${kind.IO}/${kind.WE}/${kind.type}`}
              rightTitleStyle={{fontSize:17}}
              hideChevron
            />
            <ListItem
              key="time"
              title="時段"
              titleStyle={{fontSize:20}}
              rightTitle="早/中/晚/睡前"
              rightTitleStyle={{fontSize:17}}
              hideChevron
            />
            <ListItem
              key="effect"
              title="效用"
              titleStyle={{fontSize:20}}
              rightTitle={`${effect}`}
              rightTitleStyle={{fontSize:17}}
              hideChevron
            />
            <ListItem
              key="subeffect"
              title="副作用"
              titleStyle={{fontSize:20}}
              rightTitle={`${subeffect}`}
              rightTitleStyle={{fontSize:17}}
              hideChevron
            />
            <ListItem
              key="warn"
              title="注意事項"
              titleStyle={{fontSize:20}}
              rightTitle={`${warn}`}
              rightTitleStyle={{fontSize:17}}
              hideChevron
            />
            <ListItem
              key="reason"
              title="本次服用原因"
              titleStyle={{fontSize:20}}
              rightTitle={`${reason}`}
              rightTitleStyle={{fontSize:17}}
              hideChevron
            />
            <ListItem
              key="other"
              title="備註"
              titleStyle={{fontSize:20}}
              rightTitle={`${other}`}
              rightTitleStyle={{fontSize:17}}
              hideChevron
            />
        </List>
     </ScrollView>
    );
  }

const styles = {
  img:{
    alignSelf:'center',
    width:150,
    height:150,
    borderRadius:75,
    marginTop:30,
    zIndex:1
  },
  name:{
    alignSelf:'center',
    fontSize:20,
    paddingTop:15
  }
};

export default MedicineDetails;
