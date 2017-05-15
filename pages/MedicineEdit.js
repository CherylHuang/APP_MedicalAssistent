import React, { Component } from 'react';
import { View, Image, Text, ScrollView } from 'react-native';
import { List, ListItem, Icon } from 'react-native-elements';

import medicine from '../json/medicine.json';

// Make a component
class MedicineEdit extends Component {
  state = { medicine: [] };

  componentWillMount() {
    this.setState({ medicine });
  }

  render() {
        const { flex, img, icon, icon_pos } = styles;
    return (
      <ScrollView>
          <View style={flex}>
            <Image source={{uri: 'http://img01.ibnlive.in/ibnlive/uploads/875x584/jpg/2016/12/medicines1.jpg'}} 
            style={img}
            />
            <View style={icon_pos}>
                <Icon name='photo-camera' color='white'
                underlayColor='#b9d0e3' size={25}
                containerStyle={icon}
                onPress={()=>{}} />
            </View>
          </View>

        <List>
          <ListItem
            title={
            <View style={{flexDirection:'row'}}>
                <Text style={{fontSize:20}}>  名稱   </Text>
                <Text style={{fontSize:20, color: '#bdc6cf'}}>感冒藥 </Text>
                <Icon name='edit' color='#517fa4' onPress={()=>{}} />
            </View>
                }
            hideChevron
          />
          <ListItem
            title="分類"
            titleStyle={{fontSize:20}}
            rightTitle={'內服/西藥/膠囊'}
            rightTitleStyle={{fontSize:17}}
          />
          <ListItem
            title="時段"
            titleStyle={{fontSize:20}}
            rightTitle={'早/中/晚/睡前'}
            rightTitleStyle={{fontSize:17}}
          />
          <ListItem
            title="效用"
            titleStyle={{fontSize:20}}
            rightTitle={'咳嗽 流鼻水'}
            rightTitleStyle={{fontSize:17}}
          />
          <ListItem
            key={this.state.medicine.kind}
            title="副作用"
            titleStyle={{fontSize:20}}
            rightTitle={'嗜睡'}
            rightTitleStyle={{fontSize:17}}
          />
          <ListItem
            key={this.state.medicine.kind}
            title="注意事項"
            titleStyle={{fontSize:20}}
          />
          <ListItem
            key={this.state.medicine.kind}
            title="本次服用原因"
            titleStyle={{fontSize:20}}
          />
          <ListItem
            key={this.state.medicine.kind}
            title="備註"
            titleStyle={{fontSize:20}}
          />
        </List>
       
      </ScrollView>
    );
  }
}
const styles = {
  flex:{
    flex:1
  },
  icon_pos:{
    alignSelf:'center',
    width:130
  },
  img:{
    alignSelf:'center',
    width:150,
    height:150,
    borderRadius:75,
    marginTop:30
  },
  icon:{
    alignSelf:'flex-end',
    marginTop:-45,
    backgroundColor:'#517fa4',
    width:40,
    height:40,
    borderRadius:20
  }
}

export default MedicineEdit;