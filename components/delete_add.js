import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

class delete_add_icon extends Component {

render(){    
        const { right, icon } = styles;
return (
    <View style={[right]}>
            <Icon name='delete' size={30} color="#517fa4"
             containerStyle={{marginRight:5}}
            onPress={() => {}} 
            />
            <Icon name='add' size={30} color="#517fa4"
             containerStyle={{marginRight:5}}
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

export default delete_add_icon;