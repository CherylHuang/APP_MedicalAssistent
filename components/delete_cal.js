import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

class delete_cel_icon extends Component {

render(){    
        const { right, icon } = styles;
return (
    <View style={[right]}>
            <Icon name='delete' size={30} color="#517fa4"
             containerStyle={{padding:7}}
            onPress={() => {}} 
            />
            <Icon name='date-range' size={30} color="#517fa4"
             containerStyle={{padding:7}}
            onPress={() => {}}
            />
    </View>
);}

}

const styles = {
    right: {
        flexDirection:'row'
    }
};

export default delete_cel_icon;