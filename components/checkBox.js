import React, { Component } from 'react';
import { View } from 'react-native';
import CheckBox from 'react-native-icon-checkbox';

class checkbox extends Component {

constructor(props) {
    super(props);
    this.state = {
      isChecked: false,
    };
  }
 
  handlePressCheckedBox = (checked) => {
    this.setState({
      isChecked: checked,
    });
  }

    render(){    
        const { checkbox } = styles;
        return (
        <View style={[checkbox]}>
            <CheckBox
             key={'checkBox'}
             size={30}
             checked={this.state.isChecked}
             onPress={this.handlePressCheckedBox}
             />
        </View>
    );
}

}

const styles = {
    checkbox: {
        width: 50
    }
};

export default checkbox;