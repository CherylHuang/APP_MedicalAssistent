import React, { Component } from 'react';
import { TabNavigator, StackNavigator, View } from 'react-navigation';
import { Icon, Avatar } from 'react-native-elements';
import { Linking, ScrollView, Button, SegmentedControlIOS } from 'react-native';

import Medicine from './pages/Medicine';
import Today from './pages/Today';
import History from './pages/History';
import Account from './pages/Account';
import ChangeAccount from './pages/ChangeAccount';
import Remind from './pages/Remind';
import MedicineDetails from './pages/MedicineDetails';
import ClockDetails from './pages/ClockDetails';

import DeleteAddIcon from './components/delete_add';


export const AccountStack = StackNavigator({
  Account: {
    screen: Account,
    navigationOptions: {
      header: ({navigate}) => ({
       left:(
          <Button
          title='變更成員'
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
  ChangeAccount: {
    screen: ChangeAccount,
    navigationOptions: {
      header: ({navigate}) => ({
        title:'變更成員',
        right:(
          <DeleteAddIcon />
        )
      })
    },
  },
});
 export const ChangeAccountStack = StackNavigator({
    
  ChangeAccount: {
    screen: ChangeAccount,
    navigationOptions: {
      header: ({navigate}) => ({
        title: '變更成員',
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
      header: ({navigate}) => ({
        title: '藥物管理',
        right:(
          <DeleteAddIcon />
        ),
        left:(
          <Avatar
          small
          rounded
          source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg"}}
          containerStyle={{marginLeft: 8,marginBottom:10}}
          onPress={() => navigate('Account')}
         />
        ),
      })
    },
  },
  MedicineDetails: {
    screen: MedicineDetails,
    navigationOptions: {
      header: ({ state }) => ({
        right:(
          <Button
          title='編輯'
          color = "#888888"
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
      header: ({navigate}) => ({
        title: '服藥提醒',
        right:(
          <DeleteAddIcon />
        ),
        left:(
          <Avatar
          small
          rounded
          source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg"}}
          containerStyle={{marginLeft: 8,marginBottom:10}}
          onPress={() => navigate('Account')}
          
         />
        ),
      })
    },
  },
  ClockDetails: {
    screen: ClockDetails,
    navigationOptions: {
      header: ({ state }) => ({
        right:(
          <Button
          title='編輯'
          color = "#888888"
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
      header: ({navigate}) => ({
        title: '今日藥物',
        left:(
          <Avatar
          small
          rounded
          source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg"}}
          containerStyle={{marginLeft: 8,marginBottom:10}}
          onPress={() => navigate('Account')}
          
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
      header: ({navigate}) => ({
        title: '歷史紀錄',
        left:(
          <Avatar
          small
          rounded
          source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg"}}
          containerStyle={{marginLeft: 8,marginBottom:10}}
          onPress={() => navigate('Account')}
          
         />
        ),
        right:(
       
          <Icon
          name='date-range'
          color = "#888888"
          size={30} containerStyle={{marginRight:5}}
          onPress={() => {}}
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
          label: '成員管理',
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