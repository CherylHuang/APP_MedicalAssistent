import React, { Component } from 'react';
import { View, Image, Text ,ScrollView } from 'react-native';
import { List, ListItem, Icon,Button,Card } from 'react-native-elements';
import CheckBox from 'react-native-icon-checkbox';
import me from '../json/me.json';
import medicine from '../json/historymedicine.json';
// Make a component
class Today extends Component {
  state = { me: [],medicine:[] };

  componentWillMount() {
    this.setState({ me });
    this.setState({ medicine });
  }
  handlePressCheckedBox = (checked) => {
      this.setState({
        isChecked: checked,
      });
  }
  render() {
        const { img, name,date,column,row,box,title,checkbox } = styles;
    return (
      <ScrollView style={{flex:1}}>
        <View style={row}>

          <View style={box}>
            <Image source={{uri: this.state.me.img}} 
            style={img}
            />
            <View>
            <Text style={name}>{this.state.me.name}</Text>
            </View>
          </View>

          <View style={box}>
            <Text style={date}>4/17(一)</Text>
            <Button 
              title="新增提醒"
              buttonStyle={{marginRight:20 ,borderRadius:12}}
              textStyle={{fontSize:18,color:"white"}}
              icon={{name: "add" ,size:23}}
              backgroundColor='#517fa4'            
             />
          </View>

        </View>

{/*        
        <Text style={title}>今日藥物</Text>*/}
       

          <View style={{flex:1}}> 
          <Card title='今日藥物'titleStyle={{padding:10,marginBottom:0,borderRadius:10,height:44,color:'#517fa4',fontSize:18}} containerStyle={{borderRadius:10,paddingTop:5 }}>
          
          <Card title='8:30' titleStyle={{fontSize:18 }} containerStyle={{margin: 0,borderWidth:0,borderRadius:10}}>
            <List style={[checkbox]}>
             <CheckBox
                size={30}
                checked={this.state.isChecked}
                color='#517fa4'
                onPress={this.handlePressCheckedBox}
                            
              />       
            <ListItem
              title={this.state.medicine.name417.time830.m1}
              titleStyle={{fontSize:18 }}
              hideChevron
              //leftIcon={{name: 'check',size:25,color:"#6eb372"}}             
            />
            </List>
            <ListItem
              title={this.state.medicine.name417.time830.m2}
              titleStyle={{fontSize:18 }}
              hideChevron
              leftIcon={{name: 'close',size:25,color:"#d95858"}}
            />
            </Card>
            <Card title='13:00' titleStyle={{fontSize:18 }} containerStyle={{margin: 0,marginTop: 8,borderWidth:0,borderRadius:10}} >
              <ListItem
              title={this.state.medicine.name417.time2030.m1}
              titleStyle={{fontSize:18 }}
              hideChevron
              leftIcon={{name: 'check',size:25,color:"#6eb372"}}
              />
            </Card>
          
          </Card>
          </View>
      




       
      </ScrollView>
    );
  }
}
const styles = {
  img:{
    //alignSelf:'flex-start',
    width:120,
    height:120,
    borderRadius:58,
    
    //marginLeft:10,
  },
  name:{
    //alignSelf:'flex-start',
    fontSize:20,
    paddingTop:15,
    //marginLeft:60,
  },
  date:{
    fontSize:32,
    //alignSelf:'flex-end',
    marginTop:28,
    marginBottom:28,
    flexDirection:'column'
  },
  row:{
    flexDirection:'row', 
    justifyContent:'center',

  },
  column:{
    flexDirection:'column'
  },
  box:{
    flex:1,
    flexDirection:'column',
    marginLeft:12,
    marginRight:12,
    alignItems:'center',
    marginTop:28,
  },
  title:{
    flexDirection:'column',
    paddingLeft:70,
    fontsize:20,
    textAlign:'center',
    // backgroundColor:
  },
     checkbox: {
        
        width: 50,
        marginLeft: 10,
        
    },

}

export default Today;


        {/*<List>
          <ListItem
            //imageSrc={require('../assets/icon_alarm.png')}
            //leftIcon={require('../assets/icon_alarm.png')}
            key={this.state.me.name}
            title="藥物數量"
            titleStyle={{fontSize:20}}
            rightTitle={this.state.me.medicine}
            rightTitleStyle={{fontSize:20}}
            //containerStyle={{flex: 1,height:30}}
            leftIcon={{name: "group-work",color:'#517fa4'}}
            hideChevron
          />
          <ListItem
            key={this.state.me.alarm}
            title="鬧鐘數量"
            titleStyle={{fontSize:20}}
            rightTitle={this.state.me.alarm}
            rightTitleStyle={{fontSize:20}}
            leftIcon={{name: "alarm",color:'#517fa4'}}
            hideChevron
          />
          <ListItem
            key={this.state.me.password}
            title="密碼"
            titleStyle={{fontSize:20}}
            rightTitle={this.state.me.password}
            rightTitleStyle={{fontSize:20}}
            leftIcon={{name: "lock",color:'#517fa4'}}
            hideChevron
          />
    
        </List>*/}