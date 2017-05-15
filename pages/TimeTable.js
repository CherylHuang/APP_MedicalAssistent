import React, { Component } from 'react';
import { View, Image } from 'react-native';

// Make a component
class TimeTable extends Component {


  render() {
    const { container } = styles;
    return (
        <Image source={require('../assets/timeTable2.jpg')} style={container} />
    );
  }
}

const styles = {
    container:{
      // height:300,
      flex:1,
      width:null
    }
};

export default TimeTable;