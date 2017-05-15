import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

class delete_cel_icon extends Component {

state = { 
      calMode: false
   };

// constructor(props) {
//         super(props);
//         this.state = {
//             calMode: false
//         };
//     }

getValue(){
        return this.state.calMode;
  }

renderButton() {
    if (this.state.calMode) {
      return (
          <Icon name='library-books' size={30} color="#517fa4"
             containerStyle={{padding:7}}
            onPress={ () => {this.setState({ calMode: false }); 
                 }
            }
            />
      );
    }

    return (
      <Icon name='date-range' size={30} color="#517fa4"
             containerStyle={{padding:7}}
            onPress={ () => {this.setState({ calMode: true });
                 }
            }
            />
    );
  }

render(){    
        const { right } = styles;
return (
    <View style={[right]}>
            <Icon name='delete' size={30} color="#517fa4"
             containerStyle={{padding:7}}
            onPress={() => {}} 
            />
            {this.renderButton()}
    </View>
);}

}

const styles = {
    right: {
        flexDirection:'row'
    }
};

export default delete_cel_icon;