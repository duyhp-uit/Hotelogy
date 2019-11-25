import React from 'react';
import {View, SafeAreaView, Text, StyleSheet, FlatList, TouchableOpacity, Image} from 'react-native';
export default class Booking extends React.Component {
	renderRoomTypeCard(item, index) {
		const isLastItem = index === roomType.length - 1;
		return(
			<TouchableOpacity 
				activeOpacity = {0.8} 
				onPress = {() => this.props.navigation.navigate('Room', 
						{
						id: item.id,
						name: item.name, 
						description: item.description,
						image: item.image, 
						price: item.price,
						rating: item.rating
						})}>
				<View 
					style={{flex: 1 }, [
							index === 0 ? { marginLeft: 36 } : null,
							isLastItem ? { marginRight: 36 / 2 } : null,
						]}
				>
					<View style={[styles.flex, styles.recommendationHeader]}>
					<Image 
					style={{height: 100, width: 100}}
					source={{ uri: item.image }} />
					</View>
					<View style={[styles.flex, styles.column, { justifyContent: 'space-evenly', padding: 36 / 2 }]}>
					<Text style={{ fontSize: 16 * 1.25, fontWeight: '500', paddingBottom: 36 / 4.5, }}>{item.name}</Text>
					<Text style={{ color: '#BCCCD4' }}>{item.description}</Text>
					</View>
					<View style={[
						styles.row,
						{ alignItems: 'center', justifyContent: 'space-between' }
					]}>
						<Text style={{ color: '#007BFA', marginLeft: 30, fontSize: 22, fontWeight: 'bold'}}>
						{item.price}$
						</Text>
					</View>
				</View>
			</TouchableOpacity>
		)
		}
	render() {
    	return (
			<SafeAreaView style= {styles.roomList}>
			<FlatList 
						pagingEnabled
						scrollEnabled
						showsHorizontalScrollIndicator = {false}
						scrollEventThrottle = {16}
						snapToAlignment = "center"
						data = {roomType}
						keyExtractor = {(item, index)=> `${item.id}`} 
						renderItem={({ item, index }) => this.renderRoomTypeCard(item, index)}
					/>
		
			</SafeAreaView>
    	);
  	}
}
const styles = StyleSheet.create({
  roomList: {
	flexDirection: 'column'
  },
});

const roomType = [
	{
		id: 1,
		name: 'Single Room',
		image: 'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
		price: 99,
		idCategory: 1,
		description: 'Phòng đầy đủ tiện nghi với một giường đơn nhỏ',
		rating: 4
	},
	{
		id: 2,
		name: 'Couple Room',
		image: 'https://images.unsplash.com/photo-1458906931852-47d88574a008?auto=format&fit=crop&w=800&q=80',
		price: 129,
		idCategory: 2,
		description: 'Phòng đầy đủ tiện nghi với một giường đôi lớn',
		rating: 5
	},
	{
		id: 3,
		name: 'Large Room',
		image: 'https://images.unsplash.com/photo-1458906931852-47d88574a008?auto=format&fit=crop&w=800&q=80',
		price: 119,
		idCategory: 3,
		description: 'Phòng đầy đủ tiện nghi với hai giường đơn lớn',
		rating: 4
	},
	{
		id: 4,
		name: 'Deluxe Room',
		image: 'https://images.unsplash.com/photo-1458906931852-47d88574a008?auto=format&fit=crop&w=800&q=80',
		price: 159,
		idCategory: 4,
		description: 'Phòng đầy đủ tiện nghi với hai giường đôi lớn',
		rating: 3
	}
]