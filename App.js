import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import React, { Component } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Explore from './screens/Explore';
import Booking from './screens/Booking';
import Inbox from './screens/Inbox';
import Other from './screens/Other';
import Profile from './screens/Profile';
const TabNavigator = createBottomTabNavigator({
  Explore: {
    screen: Explore,
    navigationOptions: {
      tabBarIcon: ({ focused, tintColor }) => {
          const iconName = `ios-person`;
          return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
  },
  },
  Booking: {
    screen: Booking,
  },
  Inbox: {
    screen: Inbox,
  },
  Other: {
    screen: Other,
  },
  Profile: {
    screen: Profile,
  },

}, 
{
});

export default createAppContainer(TabNavigator);
