import React, { Component } from 'react';
import { TabNavigator, StackNavigator, View } from 'react-navigation';
import { Icon, Button, Avatar } from 'react-native-elements';
import { Linking, ScrollView, SegmentedControlIOS } from 'react-native';

import Medicine from './pages/Medicine';
import Details from './pages/Details';
import Today from './pages/Today';
import History from './pages/History';
import Account from './pages/Account';
import ChangeAccount from './pages/ChangeAccount';
import Remind from './pages/Remind';


export const AccountStack = StackNavigator({
  Account: {
    screen: Account,
    navigationOptions: {
      header: ({navigate}) => ({
       left:(
          <Button
          title='變更用戶'
          color = "#888888"
          onPress={() => navigate('ChangeAccount')}
          />
        ),
        right:(
          <Button
          title='編輯'
          color = "#888888"
          />
        ),
      })
    },
  },
  Details: {
    screen: Details,
    navigationOptions: {
      header: ({ state }) => ({
        title: `${state.params.title.toUpperCase()}`,
      })
    },
  },
  ChangeAccount: {
    screen: ChangeAccount,
    navigationOptions: {
      header: () => ({
        title:'變更用戶',
        right:(
          <Icon
          name='date-range'
          color = "#888888"
          containerStyle={{marginRight: 7,marginTop:8}}
          size={30}
          //onPress
          />
        )
        
      })
    },
  },
});
 export const ChangeAccountStack = StackNavigator({
    
  ChangeAccount: {
    screen: ChangeAccount,
    navigationOptions: {
      header: () => ({
        title: '變更用戶',
      })
    },
  },
  
},
{
  // headerMode: 'none',
}
);
export const MedicineStack = StackNavigator({
  Medicine: {
    screen: Medicine,
    navigationOptions: {
      header: () => ({
        title: '藥物管理',
        right:(
          <Button
          buttonStyle={{
            margin:0,padding:10,
          }}
          iconRight
          icon={{
            name: 'add', color:"black",
            size:25,
          }}
          backgroundColor='rgba(0,0,0,0)'
          underlayColor='rgba(0,0,0,0.2)'
          />
        ),
        left:(
          <Avatar
          small
          rounded
          source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg"}}
          containerStyle={{marginLeft: 8,marginBottom:10}}
          //onPress={() => navigate('ChangeAccount')}
          
         />
        ),
      })
    },
  },
},
{
  // headerMode: 'none',
}
);

export const RemindStack = StackNavigator({
  Remind: {
    screen: Remind,
    navigationOptions: {
      header: () => ({
        title: '服藥提醒',
        right:(
          <Button
          buttonStyle={{
            margin:0,padding:10,
          }}
          iconRight
          icon={{
            name: 'add', color:"black",
            size:25,
          }}
          backgroundColor='rgba(0,0,0,0)'
          underlayColor='rgba(0,0,0,0.2)'
          />
        ),
        left:(
          <Avatar
          small
          rounded
          source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg"}}
          containerStyle={{marginLeft: 8,marginBottom:10}}
          //onPress={() => navigate('ChangeAccount')}
          
         />
        ),
      })
    },
  },
},
{
  // headerMode: 'none',
}
);
export const TodayStack = StackNavigator({
  Today: {
    screen: Today,
    navigationOptions: {
      header: () => ({
        title: '今日藥物',
        left:(
          <Avatar
          small
          rounded
          source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg"}}
          containerStyle={{marginLeft: 8,marginBottom:10}}

  
          //onPress={() => navigate('ChangeAccount')}
          
         />
        ),
      })
    },
  },
},
{
  // headerMode: 'none',
}
);

export const HistoryStack = StackNavigator({
  Setting: {
    screen: History,
    navigationOptions: {
      header: () => ({
        title: '歷史紀錄',
        left:(
          <Avatar
          small
          rounded
          source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg"}}
          containerStyle={{marginLeft: 8,marginBottom:10}}

  
          //onPress={() => navigate('ChangeAccount')}
          
         />
        ),
        right:(
       
          <Icon
          name='date-range'
          color = "#888888"
          containerStyle={{marginRight: 7,marginTop:8}}
          size={30}
          //onPress
          />
        ),
      })
    },
  },
});

export const TabRouter = TabNavigator(
  {
    AccountStack: {
      screen: AccountStack,
      navigationOptions: {
        tabBar: {
          label: '用戶管理',
          icon: ({ tintColor }) => <Icon name="person" size={30} color={tintColor} />
        },
      },
    },
     MedicineStack: {
      screen: MedicineStack,
      navigationOptions: {
        tabBar: {
          label: '藥物管理',
          icon: ({ tintColor }) => <Icon name="storage" size={30} color={tintColor} />
        },
      },
    },
    RemindStack: {
      screen: RemindStack,
      navigationOptions: {
        tabBar: {
          label: '服藥提醒',
          icon: ({ tintColor }) => <Icon name="alarm" size={30} color={tintColor} />
        },
      },
    },
    TodayStack: {
      screen: TodayStack,
      navigationOptions: {
        tabBar: {
          label: '今日藥物',
          icon: ({ tintColor }) => <Icon name="local-drink" size={30} color={tintColor} />
        },
      },
    },
    HistoryStack: {
      screen: HistoryStack,
      navigationOptions: {
        tabBar: {
          label: '歷史紀錄',
          icon: ({ tintColor }) => <Icon name="assignment" size={30} color={tintColor} />
        },
      },
    },
  },
  {
    animationEnabled: 'true',
  }
);
