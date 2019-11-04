import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import React, { Component } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Explore from './src/containers/Explore'
import Booking from './src/containers/Booking';
import Inbox from './src/containers/Inbox';
import Profile from './src/containers/Profile';
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
    navigationOptions: {
      tabBarIcon: ({ focused, tintColor }) => {
          const iconName = `ios-heart`;
          return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
  },
  },
  Inbox: {
    screen: Inbox,
    navigationOptions: {
      tabBarIcon: ({ focused, tintColor }) => {
          const iconName = `ios-person`;
          return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
  },
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      tabBarIcon: ({ focused, tintColor }) => {
          const iconName = `ios-person`;
          return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
  },
  },

}, 
{
});

export default createAppContainer(TabNavigator);
