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
        const { img, name,date,column,row,box,title,checkbox,box2 } = styles;
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

          <View style={[box ,box2]}>
            <View style={{flexDirection:'row'}}>
            <Text style={date}>4/17</Text>
            <Text style={{fontSize:16,marginTop:48}}>(一)</Text>
            </View>
            <Button 
              title="新增提醒"
              large
              buttonStyle={{marginRight:20 ,borderRadius:5, height:45}}
              textStyle={{fontSize:18,color:"white"}}
              icon={{name: "add" ,size:23}}
              backgroundColor='#517fa4'            
             />
          </View>

        </View>

{/*        
        <Text style={title}>今日藥物</Text>*/}
       

          <View style={{flex:1}}> 
          <Card title='今日藥物'titleStyle={{padding:10,marginBottom:0,borderRadius:10,height:44,color:'#517fa4',fontSize:18}} containerStyle={{borderRadius:10,paddingTop:5,backgroundColor:"#b9d0e3"}}>
          
          <Card title='8:30' titleStyle={{fontSize:18 }} containerStyle={{margin: 0,borderWidth:0,borderRadius:10}}>

         <View style={{flexDirection:'row'}}>   
                <View style={[checkbox]}>
                    <CheckBox
                    size={30}
                    checked={this.state.isChecked}
                    color='#517fa4'
                    onPress={this.handlePressCheckedBox}
                    />
                </View>
            <View style={{flex:1}}>             
            <ListItem
              title={this.state.medicine.name417.time830.m1}
              titleStyle={{fontSize:18}}
              hideChevron
              containerStyle={{marginLeft:-36}}      
            />
            </View>
        </View>
        <View style={{flexDirection:'row'}}>   
                <View style={[checkbox]}>
                    <CheckBox
                    size={30}
                    checked={this.state.isChecked}
                    color='#517fa4'
                    onPress={this.handlePressCheckedBox}
                    containerStyle={{marginBottom:10}}  //0512 沒用
                    />
                </View>
            <View style={{flex:1}}>     
            <ListItem
              title={this.state.medicine.name417.time830.m2}
              titleStyle={{fontSize:18 }}
              hideChevron
              containerStyle={{marginLeft:-36}}      
            />
              </View>
        </View>
            </Card>


            <Card title='13:00' titleStyle={{fontSize:18 }} containerStyle={{margin: 0,marginTop: 8,borderWidth:0,borderRadius:10}} >
               <View style={{flexDirection:'row'}}>   
                <View style={[checkbox]}>
                    <CheckBox
                    size={30}
                    checked={this.state.isChecked}
                    color='#517fa4'
                    onPress={this.handlePressCheckedBox}
                    />
                </View>
            <View style={{flex:1}}>     
              <ListItem
              title={this.state.medicine.name417.time2030.m1}
              titleStyle={{fontSize:18 }}
              hideChevron
              containerStyle={{marginLeft:-36}}      
              />
             </View> 
          </View>
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
    paddingTop:10,
    //marginLeft:60,
  },
  date:{
    fontSize:35,
    //alignSelf:'flex-end',
    marginTop:30,
    marginBottom:26,
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
    marginLeft:20,
    marginRight:5,
    alignItems:'center',
    marginTop:28,
  },
  box2:{
    flex:1.2,
    marginRight:10,
    marginLeft:5,
  },
  title:{
    //flexDirection:'column',
    paddingLeft:70,
    fontsize:20,
    textAlign:'center',
    // backgroundColor:
  },
     checkbox: {
        width: 55,
        marginLeft: 10,
        marginBottom:20  //0512 沒用
    },

}

export default Today;