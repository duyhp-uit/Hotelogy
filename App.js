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
import FinishBooking from './src/containers/FinishBooking'
import FeedbackForm from './src/containers/FeedbackForm'
import ProfileForm from './src/containers/ProfileForm'
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
	InfoInput: {
		screen: InfoInput,
		navigationOptions: {
			headerTitle: 'Reservation'
		}
	},
	FinishBooking: {
		screen: FinishBooking,
		navigationOptions: {
			headerTitle: 'Finish Booking',
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
	InfoInput: {
		screen: InfoInput,
		navigationOptions: {
			headerTitle: 'Information',
		}
	},
	FinishBooking: {
		screen: FinishBooking,
		navigationOptions: {
			headerTitle: 'Finish Booking',
		}
	}
})
const ProfileStack = createStackNavigator({
	Profile: {
		screen: Profile,
		navigationOptions: {
			headerTitle: 'Profile',
		}
	},
	FeedbackForm: {
		screen: FeedbackForm,
		navigationOptions: {
			headerTitle: 'Feedback',
		}
	},
	ProfileForm: {
		screen: ProfileForm,
		navigationOptions: {
			headerTitle: 'Edit Profile',
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
		screen: ProfileStack,
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
