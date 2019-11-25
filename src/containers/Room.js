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
}
from 'react-native'
import {Ionicons, MaterialCommunityIcons, SimpleLineIcons, FontAwesome, FontAwesome5 } from 'react-native-vector-icons'
import color from '../css/ColorConstant'
import { TouchableOpacity } from 'react-native-gesture-handler';
const { height, width } = Dimensions.get('screen');
export default class Room extends React.Component {
    renderMainImage() {
        return(
            <View style = {styles.imgTitle}>
                <Image 
                    style = {{width: '100%', height: '100%'}}
                    source = {{uri: this.props.navigation.getParam('image')}}
                >
                </Image>
            </View>
        )
    }
    renderTitleSection() {
        return (
        <View style = {styles.titleSection}>
            <Text style = {{fontSize: 24, padding: 10}}>{this.props.navigation.getParam('name')}</Text>
            {this.renderRatings(this.props.navigation.getParam('rating'))}
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
                <Text style = {{fontWeight: 'bold', fontSize: 22}}>
                    {this.props.navigation.getParam('price')}$
                </Text>
                <Text style = {{fontWeight: '300', marginTop: 6}}>
                <Ionicons name='md-checkmark' size={16} color='green'/> Includes taxes and fees
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
    render() {
        return(
            <SafeAreaView style = {{flex: 1, backgroundColor: color.gray}}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: 36}}>
                    {this.renderMainImage()}
                    {this.renderTitleSection()}
                    {this.renderDetailRoomSection()}
                    {this.renderImageColectionSection()}
                    {this.renderTotalMoneySection()}
                </ScrollView>
                
                <View>
                    <Button
                        title = 'BOOK NOW'
                    >
                    </Button>
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
        fontSize: 24,
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