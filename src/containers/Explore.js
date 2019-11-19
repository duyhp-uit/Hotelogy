// import React, { Component } from "react";
// import { View, Text, SafeAreaView, ScrollView } from "react-native";
// import SearchBar from '../components/SearchBar';
// import Category from "../components/Category";
// class Explore extends Component {
//   render() {
//     return (
// 		<SafeAreaView style={{ flex: 1 }}>
//         <SearchBar></SearchBar>
// 		<View style={{ height: 130, marginTop: 20}}>
// 			<Text
// 				style={{
// 				fontSize: 24,
// 				fontWeight: "700",
// 				paddingHorizontal: 20
// 				}}
// 			>
//       		What can we help you find, Kriss?
// 			</Text>
// 			<ScrollView
// 				scrollEventThrottle={16}
// 				horizontal={true}
// 				showsHorizontalScrollIndicator={false}
//   			>
//     			<Category
// 					imageUri={require("../assets/home.jpg")}
// 					name="Home"
// 				/>
// 				<Category
// 					imageUri={require("../assets/experiences.jpg")}
// 					name="Experiences"
// 				/>
// 				<Category
// 					imageUri={require("../assets/restaurant.jpg")}
// 					name="Restaurant"
// 				/>
// 			</ScrollView>
// 		</View>
// 		<View style={{ flex: 1, 
			
// 			marginTop: 40, paddingHorizontal: 20 }}>
// 			<Text style={{ fontSize: 24, fontWeight: "700" }}>
// 			Introducing Hotelogy Plus
// 			</Text>
// 			<Text style={{ fontWeight: "100", marginTop: 10 }}>
// 			A new selection of hotel rooms verified for quality & comfort
// 			</Text>
// 		</View>
// 		</SafeAreaView>
//     );
//   }
// }
// export default Explore;
import React from "react";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Octicons from 'react-native-vector-icons/Octicons';
import styles from '../css/styles';

import {
View,
Image,
FlatList,
ScrollView,
ImageBackground,
Platform,
Text,
TouchableOpacity,
Animated,
Dimensions
} from "react-native";
import News from '../containers/News'
const {height, width} = Dimensions.get('screen');

export default class Source extends React.Component {
	scrollX = new Animated.Value(0);
	renderDestination(item){
		return(
			<TouchableOpacity activeOpacity = {0.8} onPress = {() => this.props.navigation.navigate('News', {})}>
			<ImageBackground
				style={[styles.flex, styles.destination, styles.shadow]}
				imageStyle = {{borderRadius : 12}}
				source= {{uri : item.preview}}>
				<View style={[styles.row, {justifyContent: 'space-between'}]}>
					<View style={{flex : 0}}>
						<Image source={{uri: item.user.avatar}} style={styles.avatar}/>
					</View>
					<View style={[styles.column, {flex : 2, paddingHorizontal : 18}]}>
						<Text style={{color : 'white', fontWeight : 'bold'}}>{item.user.name}</Text>
						<Text style={{color : 'white'}}>{item.location}</Text>
					</View>
					<View style={{flex : 0, justifyContent : 'center', alignItems : 'flex-end'}}>
						<Text style={styles.rating}>{item.rating}</Text>
					</View>
				</View>
				<View style={[styles.column, styles.destinationInfo, styles.shadow]}>
					<Text style={{ fontSize: 24, fontWeight: '500', paddingBottom: 8, color: 'white'}}>
						{item.title}
					</Text>
					<View style={[ styles.row, { justifyContent: 'space-between',
												alignItems: 'flex-end',
												marginBottom: 20 }]}>
						<Text style = {{color: 'white'}}>
							{item.description.split('').slice(0, 50)}...
						</Text>
					</View>
				</View>
			</ImageBackground>
			</TouchableOpacity>
		)
	}
	renderDots(){
		const dotPosition = Animated.divide(this.scrollX, width);
    	return(
      		<View style={[ styles.flex, styles.row,
        				{ justifyContent: 'center', alignItems: 'center', marginTop: 10 }
      		]}>
			{destinations.map((item, index) => {
			const borderWidth = dotPosition.interpolate({
				inputRange: [index -1, index, index + 1],
				outputRange: [0, 2.5, 0],
				extrapolate: 'clamp'
          	});
          	return (
				<Animated.View
					key={`step-${item.id}`}
					style={[styles.dots, styles.activeDot, { borderWidth: borderWidth } ]}
            	/>
          	)
        	})}
			</View>
    	) 
	}
	renderDestinations(){
		return(
			<View style={[ styles.flex, styles.column, styles.destinations]}>
				<Text style = {{fontSize: 25, marginLeft: 30, marginTop: 40, paddingBottom: 10}}>Recommended Rooms</Text>
			<FlatList 
				horizontal
				pagingEnabled
				scrollEnabled
				showsHorizontalScrollIndicator = {false}
				scrollEventThrottle = {16}
				snapToAlignment = "center"
				decelerationRate = {0}
				// style={{ overflow : 'visible' }} //In IOS platform
				onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: this.scrollX }} }])}
				data = {destinations}
				keyExtractor = {(item, index)=> `${item.id}`}
				renderItem = {({item}) => this.renderDestination(item)}
			/>
			{this.renderDots()}
			</View>
		)
	}
	renderRecommended(){
		return(
			<View style={[styles.flex, styles.column, styles.recommended]}>
				<View
				style={[
					styles.row,
					styles.recommendedHeader,
				]}
				>
				<Text style={{ marginLeft: 30, fontSize: 25 }}>Recommended</Text>
				<TouchableOpacity activeOpacity={0.5}>
					<Text style={[styles.loadMore]}>More</Text>
				</TouchableOpacity>
				</View>
				<View style={[styles.column]}>
								<FlatList 
					horizontal
					pagingEnabled
					scrollEnabled
					showsHorizontalScrollIndicator = {false}
					scrollEventThrottle = {16}
					snapToAlignment = "center"
					data = {destinations}
					keyExtractor = {(item, index)=> `${item.id}`}
					renderItem={({ item, index }) => this.renderRecommendation(item, index)}
				/>
				</View>
			</View>
		)
	}
	renderSearch() {
	<View style={[styles.row, styles.header]}>
		<View>
			<Text>Search for place</Text>
			<Text style={{fontSize : 24}}>Destination</Text>
		</View>
		<View>
			<Image style={styles.avatar} source={{ uri: 'https://randomuser.me/api/portraits/women/32.jpg'}} /> 
		</View>
	</View>
	}
	renderRecommendation(item, index) {
	const isLastItem = index === destinations.length - 1;
	return(
		<View 
			style={[styles.flex, styles.column, styles.recommendation, styles.shadow, 
					index === 0 ? { marginLeft: 36 } : null,
					isLastItem ? { marginRight: 36 / 2 } : null,
				]}
		>
			<View style={[styles.flex, styles.recommendationHeader]}>
			<Image style={[styles.recommendationImage]} source={{ uri: item.preview }} />
			<View style={[ styles.flex, styles.row, styles.recommendationOptions ]}>
				<Text style={styles.recommendationTemp}>
				{item.temperature}℃
				</Text>
			</View>
			</View>
			<View style={[styles.flex, styles.column, { justifyContent: 'space-evenly', padding: 36 / 2 }]}>
			<Text style={{ fontSize: 16 * 1.25, fontWeight: '500', paddingBottom: 36 / 4.5, }}>{item.title}</Text>
			<Text style={{ color: '#BCCCD4' }}>{item.location}</Text>
			</View>
			<View style={[
				styles.row,
				{ alignItems: 'center', justifyContent: 'space-between' }
			]}>
				<Text style={{ color: '#007BFA', marginLeft: 30, fontSize: 22}}>
				{item.rating}
				</Text>
			</View>
		</View>
	)
	}
render(){
return(
  <View>
    
      <ScrollView 
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 36}}
        >
          {this.renderSearch()}
          {this.renderDestinations()}
          {this.renderRecommended()}
      </ScrollView>
  </View>
)}
}

const destinations = [
  {
    id: 1,
    user: {
      name: 'Lelia Chavez',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    saved: true,
    location: 'Santorini, Greece',
    temperature: 34,
    title: 'Santorini',
    description: 'Santorini is one of the Cyclades islands in the Aegean Sea. It was devastated by a volcanic eruption in the 16th century BC, forever shaping its rugged landscape. The whitewashed, cubiform houses of its 2 principal towns, Fira and Oia, cling to cliffs above an underwater caldera (crater). They overlook the sea, small islands to the west and beaches made up of black, red and white lava pebbles.',
    rating: '99$',
    reviews: 3212,
    preview: 'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
    ]
  },
  {
    id: 2,
    user: {
      name: 'Lelia Chavez',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    saved: false,
    location: 'Loutraki, Greece',
    temperature: 34,
    title: 'Loutraki',
    description: 'This attractive small town, 80 kilometers from Athens',
    rating: '80$',
    reviews: 3212,
    preview: 'https://images.unsplash.com/photo-1458906931852-47d88574a008?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1458906931852-47d88574a008?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1446903572544-8888a0e60687?auto=format&fit=crop&w=800&q=80',
    ]
  },
  {
    id: 3,
    user: {
      name: 'Lelia Chavez',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    saved: true,
    location: 'Santorini, Greece',
    temperature: 34,
    title: 'Santorini',
    description: 'Santorini - Description',
    rating: '79$',
    reviews: 3212,
    preview: 'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
    ]
  },
  {
    id: 4,
    user: {
      name: 'Lelia Chavez',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    location: 'Loutraki, Greece',
    temperature: 34,
    title: 'Loutraki',
    description: 'This attractive small town, 80 kilometers from Athens',
    rating: '109$',
    reviews: 3212,
    preview: 'https://images.unsplash.com/photo-1458906931852-47d88574a008?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1458906931852-47d88574a008?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1446903572544-8888a0e60687?auto=format&fit=crop&w=800&q=80',
    ]
  },
]