import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { List, ListItem } from 'react-native-elements';

import account from '../json/account.json';

// Make a component
class ChangeAccount extends Component {
  state = { account: [] };

  componentWillMount() {
    this.setState({ account });
  }

  goToPageTwo = (account) => {
    this.props.navigation.navigate('Account', { ...account });
  };

  render() {
    return (
      <ScrollView>
        <List>
          {this.state.account.map((account) => (
            <ListItem
              key={account.title}
              roundAvatar
              avatar={{ uri: account.image }}
              title={account.name}
              titleStyle={{fontSize:20}}
              onPress={() => this.goToPageTwo(account)}
              // hideChevron
              // rightTitle='More...'
            />
          ))}
        </List>
      </ScrollView>
    );
  }
}

export default ChangeAccount;