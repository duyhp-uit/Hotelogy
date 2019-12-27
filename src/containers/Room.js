import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    View,
    Text,
    Dimensions,
    Button,
    Image,
    FlatList,
    StyleSheet,
    Alert
}
from 'react-native'
import {Ionicons, MaterialCommunityIcons, SimpleLineIcons, FontAwesome, FontAwesome5 } from 'react-native-vector-icons'
import color from '../css/ColorConstant'
import { TouchableOpacity } from 'react-native-gesture-handler';
import DatePicker from 'react-native-datepicker'
import baseUrl from '../config/baseUrl';

const { height, width } = Dimensions.get('screen');
export default class Room extends React.Component {
    constructor(props) {
        super(props)
        var currentDate = new Date();
        if (currentDate.getDate() < 10) {
             var formatedDate = currentDate.getFullYear() + "/" + (currentDate.getMonth() + 1) + "/0" + currentDate.getDay()
        }
        else {
            var formatedDate = currentDate.getFullYear() + "/" + (currentDate.getMonth() + 1) + "/" + currentDate.getDay()
        }
        this.state = {
            date_start: formatedDate,
            date_end: formatedDate

        }
    }
    reserveRoom() {
        return fetch(baseUrl + 'api/getRoomAvailable/' + this.props.navigation.getParam('id'))
              .then((response) => response.json())
              .then((responseJson) => {
                  if (responseJson.code == 200) 
                  {
                    if (this.state.date_start <= this.state.date_end) {
                        this.props.navigation.navigate('InfoInput', {
                            id: this.props.navigation.getParam('id'),
                            name: this.props.navigation.getParam('name'),
                            description: this.props.navigation.getParam('description'),
                            image: this.props.navigation.getParam('image'),
                            price: this.props.navigation.getParam('price'),
                            rating: this.props.navigation.getParam('rating'),
                            date_start: this.state.date_start,
                            date_end: this.state.date_end
                        })
                    } else {
                        Alert.alert('Date check-in cannot be greater than date check-out! Please check again.')
                    }
                  } else {
                        Alert.alert(responseJson.message)
                  }
              })
              .catch((error) => {
                console.error(error);
              });
    }
    renderMainImage() {
        return(
            <View style = {styles.imgTitle}>
                <Image 
                    style = {{width: '100%', height: '100%'}}
                    source = {{uri: baseUrl + this.props.navigation.getParam('image')}}
                >
                </Image>
            </View>
        )
    }
    renderTitleSection() {
        return (
        <View style = {{backgroundColor: '#fff'}}>
        <View style = {styles.titleSection}>
            <Text style = {{fontSize: 30, padding: 10}}>{this.props.navigation.getParam('name')}</Text>
            <Text style = {{fontSize: 26, fontWeight: 'bold', marginTop: 10, marginLeft: 10}}>{this.renderRatings(5)}</Text>
        </View>
        <Text style = {{fontSize: 16, fontWeight: '400', marginVertical: 7, marginLeft: 10}}>{this.props.navigation.getParam('description')}</Text>
        </View>
        )
    }
    renderRatings(rating) {
        const star = new Array(5).fill(0);
        return (
            star.map((value, index) => {
                const activeStar = index < rating;
                return (
                    <FontAwesome 
                        style = {{padding: 2}}
                        name = 'star'
                        key = {index}
                        color = {activeStar ? color.yellow : 'gray'}/>
                )
            })
        )
    }
    renderDetailRoomSection() {
        return (
        <View style = {[styles.sectionDetailContainer]}>
            <View style = {{marginLeft: 10}}>
                <Text style = {{marginTop: 6}}>
                    <SimpleLineIcons name='size-fullscreen' size={16} />  Room Size: {(this.props.navigation.getParam('id')) % 2 === 1 ? '30 m2' : '45 m2'}
                </Text>
                <Text style = {{marginTop: 6}}>
                    <FontAwesome name= 'bed' size= {16}/> Two beds
                </Text>
                <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                    <Text style={{color: 'green', paddingVertical: 10}}>
                        <FontAwesome name= 'wifi' size={16}></FontAwesome> Free Wifi 
                    </Text>
                    <Text style={{color: 'green', padding: 10}}>
                        <MaterialCommunityIcons name= 'city' size={16}></MaterialCommunityIcons> City View 
                    </Text>
                    <Text style={{color: 'green', padding: 10}}>
                        <FontAwesome name= 'bathtub' size={16}></FontAwesome> Bathub or shower
                    </Text>
                    <Text style={{color: 'green'}}>
                        <FontAwesome5 name= 'tv' size={16}></FontAwesome5> Flat-Screen TV 
                    </Text>
                </View>
            </View>
        </View>
        )
    }
    renderTotalMoneySection() {
        return (
           <View style = {styles.sectionContainer}>
                <View style = {{marginLeft: 10}}>
                <Text style = {{fontWeight: 'bold', fontSize: 30, marginTop: 10, color: color.green}}>
                    {this.props.navigation.getParam('price')}$<Text style = {{fontWeight: 'bold', fontSize: 30, marginTop: 10, color: 'black'}}>/day</Text>
                </Text>
                <Text style = {{fontWeight: '300', marginTop: 6}}>
                <Ionicons name='md-checkmark' size={16} color='green'/> Includes taxes and fees
                </Text>
                <Text style = {{fontWeight: '300', marginTop: 6}}>
                <Ionicons name='md-checkmark' size={16} color='green'/> Free cancelation in 24 hours
                </Text>
                </View>
            </View>
        )
    }
    renderImageColectionSection() {
        return (
        
        <View style = {styles.sectionContainer, {flexDirection: 'row', marginTop: 5}}>
					<FlatList 
						horizontal
						pagingEnabled
						scrollEnabled
						showsHorizontalScrollIndicator = {false}
						scrollEventThrottle = {16}
						snapToAlignment = "center"
						data = {imageList}
						keyExtractor = {(item, index)=> `${item.id}`}
						renderItem={({ item, index }) => this.renderImage(item, index)}
					/>
        </View>
        )
    }
    renderImage(item, index) {
        return (
            <TouchableOpacity
                activeOpacity = {0.8}
                onPress = {() => this.props.navigation.navigate('ZoomImage', {
                    image: item.link
                })}
            >
                <Image 
                    style = {{width: 140, height: 138, marginTop: 1}}
                    source = {{uri: item.link}}
                >
            </Image>
            </TouchableOpacity>
        )
    }
    renderDateCheckSection() {
        var currentDate = new Date();
        return( 
            <View style= {[styles.sectionContainer, {flexDirection: 'row', height: 80}]}>
                <View style={{flexDirection: 'column', padding: 5}}>
                <Text>Check-in</Text>
                <DatePicker
                    style={{width: 200}}
                    date={this.state.date_start}
                    mode="date"
                    placeholder="select date"
                    format="YYYY-MM-DD"
                    minDate= {currentDate}
                    maxDate="2099-12-31"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                    dateIcon: {
                        position: 'absolute',
                        left: 0,
                        top: 4,
                        marginLeft: 0
                    },
                    dateInput: {
                        marginLeft: 36
                    }
                    // ... You can check the source to find the other keys.
                    }}
                    onDateChange={(date) => {this.setState({date_start: date})}}
                />
                </View>
                <View style= {{backgroundColor:color.gray, height: 200, width: 1}}></View>
                <View style={{flexDirection: 'column', padding: 5}}>
                <Text>Check-out</Text>
                <DatePicker
                    style={{width: 200}}
                    date={this.state.date_end}
                    mode="date"
                    placeholder="select date"
                    format="YYYY-MM-DD"
                    minDate= {currentDate}
                    maxDate="2099-12-31"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                    dateIcon: {
                        position: 'absolute',
                        left: 0,
                        top: 4,
                        marginLeft: 0
                    },
                    dateInput: {
                        marginLeft: 36
                    }
                    // ... You can check the source to find the other keys.
                    }}
                    onDateChange={(date) => {this.setState({date_end: date})}}
                />
                </View>
            </View>
        )
    }
    render() {
        
        return(
            <SafeAreaView style = {{flex: 1, backgroundColor: color.gray}}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: 36}}>
                    {this.renderMainImage()}
                    {this.renderTitleSection()}
                    {this.renderDateCheckSection()}
                    {this.renderDetailRoomSection()}
                    {this.renderImageColectionSection()}
                    {this.renderTotalMoneySection()}
                </ScrollView>
                <View>
                    <TouchableOpacity 
                    style = {{backgroundColor: color.blue, height: 60, width: '100%', alignItems: 'center'}}
                        onPress = {() => {this.reserveRoom()}}
                    >
                    <Text style= {{padding: 16, fontSize: 28}}>Reserve</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create( {
    container: {
        paddingHorizontal: 30
    },
    imgTitle: {
        width: width,
        height: 240,
    },
    titleSection: {
        height: 50,
        fontSize: 30,
        backgroundColor: '#fff',
        flexDirection: 'row',
    },
    sectionContainer: {
        marginTop: 5,
        height: 140,
        fontSize: 24,
        backgroundColor: '#fff'
    },
    sectionDetailContainer: {
        marginTop: 5,
        height: 110,
        fontSize: 24,
        backgroundColor: '#fff'
    },
    datetime: {
        fontSize:12,
        fontStyle: 'italic',
        textAlign: 'right',
        fontWeight: '300',
    },
    content: {
        lineHeight: 26
    }

})

const  imageList = [
    {
        id: 1,
        link: 'https://images.unsplash.com/photo-1458906931852-47d88574a008?auto=format&fit=crop&w=800&q=80'
    },
    {
        id: 2,
        link: 'https://pix10.agoda.net/hotelImages/908/9085278/9085278_19080514110079006345.jpg?s=1024x768'
    },
    {
        id: 3,
        link: 'https://d1nabgopwop1kh.cloudfront.net/hotel-asset/1626883025423846954_wh_17'
    }
]