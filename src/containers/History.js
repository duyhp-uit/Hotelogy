import React from 'react';
import {View, SafeAreaView, Text, StyleSheet, FlatList, TouchableOpacity, Image} from 'react-native';
import color from '../css/ColorConstant'
export default class History extends React.Component {
	constructor(props) {
        super(props)
        this.state = {
            history: ''
        }
    }
	componentDidMount() {
		fetch(baseUrl + 'api/history?email=postman@gmail.com')
		.then((response) => response.json())
		.then((responseJson) => {
		  this.setState({
			history: responseJson.data,
		  }, function(){

		  });  
		})
		.catch((error) =>{
		  console.error(error);
		});
	}
	renderRoomTypeCard(item, index) {
        const paid = <View style={{flex: 1, alignItems: 'flex-start', padding: 5}}>
        <Text style={{ color: color.green, fontSize: 22, fontWeight: 'bold'}}>
        Đã thanh toán
        </Text>
    </View>;
        const unpaid = 
        <View style={{flex: 1, alignItems: 'flex-start', padding: 5}}>
        <Text style={{ color: 'red', fontSize: 22, fontWeight: 'bold'}}>
        Chưa thanh toán
        </Text>
    </View>;
		return(
			<TouchableOpacity 
				activeOpacity = {0.8} 
				onPress = {() => {}}>
				<View 
					style={{ flex: 1,  width: '100%',padding: 5, marginVertical:10, flexDirection: 'row', backgroundColor: 'rgb(236, 241, 247)', marginBottom: 1, borderRadius: 8}}
				>
				<Image 
					style={{height: 150, width: 150, borderRadius: 5}}
					source={{ uri: baseUrl + item.image }} />
					<View style = {{flex: 1, flexDirection: 'column', flexWrap: 'wrap', marginLeft: 5}}>
						<View style={{ flexDirection: 'column', flexWrap: 'wrap'}}>
							<Text style = {{fontSize: 16, fontWeight: '400'}}>ID Booking: {item.id}</Text>
							<Text style={{ fontSize: 16 * 1.5, fontWeight: 'bold', paddingBottom: 36 / 4.5, color: 'black'}}>{item.categoryRoomName}</Text>
                            <Text style = {{fontSize: 16, fontWeight: '300'}}>{item.DateIn.split('').slice(0,10)} - {item.DateOut.split('').slice(0,10)}</Text>
						</View>
						<View style={{flex: 1, alignItems: 'flex-start', padding: 5}}>
							<Text style={{ color: color.green, fontSize: 22, fontWeight: 'bold'}}>
							{item.price}$
							</Text>
						</View>
                   {(item.id % 2 == 0) ? paid:unpaid}
					</View>
				</View>
				
			</TouchableOpacity>
		)
		}
	render() {
    	return (
			<SafeAreaView style= {styles.roomList}>
				<FlatList 
					scrollEnabled
					showsVerticalScrollIndicator = {false}
					scrollEventThrottle = {16}
					snapToAlignment = 'center'
					decelerationRate = {0}
					data = {this.state.history}
					keyExtractor = {(item, index)=> `${item.id}`} 
					renderItem={({ item, index }) => this.renderRoomTypeCard(item, index)}
					inverted={true}
						
				/>
			</SafeAreaView>
    	);
  	}
}
const styles = StyleSheet.create({
	roomList: {
		height: '100%',
		flexDirection: 'column',
		backgroundColor: color.gray
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
	},
	{
		id: 5,
		name: '123 Room',
		image: 'https://images.unsplash.com/photo-1458906931852-47d88574a008?auto=format&fit=crop&w=800&q=80',
		price: 159,
		idCategory: 4,
		description: 'Phòng đầy đủ tiện nghi với hai giường đôi lớn',
		rating: 3
	},
	{
		id: 6,
		name: 'ert Room',
		image: 'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
		price: 99,
		idCategory: 1,
		description: 'Phòng đầy đủ tiện nghi với một giường đơn nhỏ',
		rating: 4
	},
	{
		id: 7,
		name: 'AQEW Room',
		image: 'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
		price: 99,
		idCategory: 1,
		description: 'Phòng đầy đủ tiện nghi với một giường đơn nhỏ',
		rating: 4
	},
]