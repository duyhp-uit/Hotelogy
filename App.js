import { createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import React, { Component } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Explore from './src/containers/Explore'
import News from './src/containers/News'
import Booking from './src/containers/Booking'
import Inbox from './src/containers/Inbox'
import Profile from './src/containers/Profile'
import {YellowBox} from 'react-native';
YellowBox.ignoreWarnings(['Warning: ...']);
const ExploreStack = createStackNavigator({
  Explore: {
    screen: Explore,
    navigationOptions: {
      headerTitle: 'Explore',
    },
  },
  News: {
    screen: News,
    navigationOptions: {
      headerTitle: 'News',
    },
  },
});
const TabNavigator = createBottomTabNavigator({
  Explore: {
    screen: ExploreStack,
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
