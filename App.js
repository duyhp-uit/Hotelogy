import { createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import React from 'react';
import {Ionicons, FontAwesome} from 'react-native-vector-icons'
import Explore from './src/containers/Explore'
import News from './src/containers/News'
import Booking from './src/containers/Booking'
import Inbox from './src/containers/Inbox'
import Profile from './src/containers/Profile'
import Room from  './src/containers/Room'
import ZoomImage from './src/components/ZoomImage'
import InfoInput from './src/containers/InfoInput'
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
	Room: {
		screen: Room,
		navigationOptions: {
			headerTitle: 'Rooms',
		},
	},
	ZoomImage: {
		screen: ZoomImage,
		navigationOptions: {
			headerTitle: 'Zoom',
			headershown: false,
		},
	},
	Information: {
		screen: InfoInput,
		navigationOptions: {
			headerTitle: 'Reservation'
		}
	}
});
const BookingStack = createStackNavigator({
	Booking: {
		screen: Booking,
		navigationOptions: {
				headerTitle: 'Booking',
			},
	},
	Room: {
		screen: Room,
		navigationOptions: {
			headerTitle: 'Rooms',
		},
	},
	ZoomImage: {
		screen: ZoomImage,
		navigationOptions: {
			headerTitle: 'Zoom',
			headershown: false,
		},
	},
	Information: {
		screen: InfoInput,
		navigationOptions: {
			headerTitle: 'Reservation',
		}
	}
})
const TabNavigator = createBottomTabNavigator({
	Explore: {
		screen: ExploreStack,
		navigationOptions: {
			tabBarIcon: ({ focused, tintColor }) => {
				const iconName = `home`;
				return <FontAwesome name={iconName} size={25} color={tintColor} />;
			},
		},
	},
	Booking: {
		screen: BookingStack,
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
			const iconName = `md-chatboxes`;
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
		}
		}
	}, 
{
});

export default createAppContainer(TabNavigator);
