import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

class delete_add_icon extends Component {

render(){    
        const { right, icon } = styles;
return (
    <View style={[right]}>
          <View style={icon}>
            <Icon name='delete' size={30}
            onPress={() => {}} 
            />
          </View>

          <View style={icon}>
            <Icon name='add' size={30}
            onPress={() => {}}
            />
          </View>
    </View>
);}

}

const styles = {
    right: {
        flexDirection:'row'
    },
    icon:{
        marginRight:5
    }
};

export default delete_add_icon;