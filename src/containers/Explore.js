import React from "react";
import styles from '../css/styles';
import baseUrl from '../config/baseUrl'
import {
	View,
	Image,
	FlatList,
	ScrollView,
	ImageBackground,
	Text,
	TouchableOpacity,
	Animated,
	Dimensions
} from "react-native";
const {height, width} = Dimensions.get('screen');

export default class Explore extends React.Component {
	constructor(props){
		super(props);
		this.state ={ isLoading: true,
		dataRoom: '',
		dataNews: ''
		}
	  }
	 
	  componentDidMount(){
		 
	
		  fetch(baseUrl + 'api/news')
		  .then((response) => response.json())
		  .then((responseJson) => {
			this.setState({
			  dataNews: responseJson.data,
			}, function(){
			});
		  })
		  .catch((error) =>{
			console.error(error);
		  });
		  fetch(baseUrl + 'api/room-type')
		  .then((response1) => response1.json())
		  .then((responseJson1) => {
			this.setState({
			  isLoading: false,
			  dataRoom: responseJson1.data,
			}, function(){
  
			});  
		  })
		  .catch((error) =>{
			console.error(error);
		  });
	  }
	scrollX = new Animated.Value(0);
	renderNewsCard(item){
		return(
			<TouchableOpacity activeOpacity = {0.8} onPress = {() => this.props.navigation.navigate('News', {name: item.name, content: item.body, image: item.image, created_at: item.created_at})}>
			<ImageBackground
				style={[styles.flex, styles.destination, styles.shadow]}
				imageStyle = {{borderRadius: 12}}
				source= {{uri : baseUrl + item.image}}>
				<View style={[styles.column, styles.destinationInfo, styles.shadow]}>
					<Text style={{ fontSize: 18, fontWeight: '500', paddingBottom: 8, color: 'white'}}>
						{item.name}
					</Text>
					<View style={[ styles.row, { justifyContent: 'space-between',
												alignItems: 'flex-end',
												marginBottom: 20 }]}>
						<Text style = {{color: 'white'}}>
							{item.body.split('').slice(0, 50)}...
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
			{news.map((item, index) => {
			const borderWidth = dotPosition.interpolate({
				inputRange: [index -1, index, index + 1],
				outputRange: [0, 2.5, 0],
				extrapolate: 'clamp'
          	});
          	return (
				<Animated.View
					key={`step-${item.id}`}
					style={[styles.dots, styles.activeDot, {borderWidth: borderWidth} ]}
            	/>
          	)
        	})}
			</View>
    	) 
	}
	renderNewsSection(){
		return(
			<View style={[ styles.flex, styles.column, styles.destinations]}>
			<Text style = {{fontSize: 25, marginLeft: 30, marginTop: 40, paddingBottom: 10}}>Khuyến mãi</Text>
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
					data = {this.state.dataNews}
					keyExtractor = {(item, index)=> `${item.id}`}
					renderItem = {({item}) => this.renderNewsCard(item)}
				/>
				{this.renderDots()}
			</View>
		)
	}
	renderRoomTypeSection(){
		return(
			<View style={[styles.flex, styles.column, styles.recommended]}>
				<View
				style={[
					styles.row,
					styles.recommendedHeader,
				]}
				>
				<Text style={{ marginLeft: 30, fontSize: 25 }}>Các loại phòng</Text>
				<TouchableOpacity activeOpacity={0.5} onPress = {() => this.props.navigation.navigate('Booking')}>
					<Text style={[styles.loadMore]}>See All</Text>
				</TouchableOpacity>
				</View>
				<View style={[styles.column]}>
					<FlatList 
						horizontal
						scrollEnabled
						showsHorizontalScrollIndicator = {false}
						scrollEventThrottle = {16}
						snapToAlignment = "center"
						data = {this.state.dataRoom}
						keyExtractor = {(item, index)=> `${item.id}`} 
						renderItem={({ item, index }) => this.renderRoomTypeCard(item, index)}
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
			<Image style={styles.avatar} source={{ uri: 'https://randomuser.me/api/portraits/women/32.jpg'}}/> 
		</View>
	</View>
	}
	renderRoomTypeCard(item, index) {
	const isLastItem = index === news.length - 1;
	return(
		<TouchableOpacity 
			activeOpacity = {0.8} 
			onPress = {() => this.props.navigation.navigate(
				'Room', {
					id: item.id,
					name: item.name, 
					description: item.description,
					image: baseUrl + item.image, 
					price: item.price,
					rating: item.rating
					})}>
			<View 
				style={[styles.flex, styles.column, styles.recommendation, styles.shadow, 
						index === 0 ? { marginLeft: 36 } : null,
						isLastItem ? { marginRight: 36 / 2 } : null,
					]}
			>
				<View style={[styles.flex, styles.recommendationHeader]}>
				<Image style={[styles.recommendationImage]} source={{ uri: baseUrl + item.image }} />
				</View>
				<View style={[styles.flex, styles.column, { justifyContent: 'space-evenly', padding: 36 / 2 }]}>
				<Text style={{ fontSize: 20 * 1.25, fontWeight: '500', paddingBottom: 36 / 4.5, }}>{item.name}</Text>
				<Text>{item.description.split('').slice(0,50)} ...</Text>
				</View>
				<View style={[
					styles.row
				], {alignSelf: 'flex-end', paddingHorizontal: 20}}>
					<Text style={{ color: color.green,  fontSize: 22, fontWeight: 'bold'}}>
					{item.price}$
					</Text>
				</View>
			</View>
		</TouchableOpacity>
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
			{this.renderNewsSection()}
			{this.renderRoomTypeSection()}
			</ScrollView>
  		</View>
)}
}

const news = [
	{
		id: 1,
		name:'Khách sạn Paradise Resort khuyến mại trọn gói 3 ngày 2 đêm CHỈ 2,1 triệu/ người',
		body: '1 phòng Suite tại Khách sạn Paradise Suites dành cho gia đình 2 người lớn cho 2 đêm, MIỄN PHÍ cho 1 bé dưới 5 tuổi.Xe đưa đón 2 chiều, Hà Nội – Hạ Long – Hà Nội tại 49 Hai Bà Trưng Hà Nội2 Buffet sáng tại Khách sạn Paradise Suites2 bữa trưa và 1 bữa tối tại nhà hàng 1958 ngon nổi tiếng tại Hạ Long (hiện đang đứng số 1 trên tripadvisor)',
		image: 'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
		created_at: '2019-04-02 13:19:04'
	},
	{
		id: 2,
		name:'Chương trình tri ân khách hàng tại Khách Sạn Paradise Resort',
		body: 'Khi đặt phòng tại khách sạn quý khách sẽ được sử dụng các dịch vụ miễn phí như: Hồ bơi, sân tennis, phòng gym….và được 1 xuất ăn sáng phong phú.Đặc biệt, giá phòng sẽ ưu đãi hơn khi bạn đặt phòng tại website khách sạn.',
		image: 'https://images.unsplash.com/photo-1458906931852-47d88574a008?auto=format&fit=crop&w=800&q=80',
		created_at: '2019-04-02 13:19:04'
	},
	{
		id: 3,
		name:'Khách sạn Paradise Resort khuyến mại trọn gói 3 ngày 2 đêm CHỈ 2,1 triệu/ người',
		body: '1 phòng Suite tại Khách sạn Paradise Suites dành cho gia đình 2 người lớn cho 2 đêm, MIỄN PHÍ cho 1 bé dưới 5 tuổi.Xe đưa đón 2 chiều, Hà Nội – Hạ Long – Hà Nội tại 49 Hai Bà Trưng Hà Nội2 Buffet sáng tại Khách sạn Paradise Suites2 bữa trưa và 1 bữa tối tại nhà hàng 1958 ngon nổi tiếng tại Hạ Long (hiện đang đứng số 1 trên tripadvisor)',
		image: 'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
		created_at: '2019-04-02 13:19:04'
	}
]


