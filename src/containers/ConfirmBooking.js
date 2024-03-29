import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    View,
    Text,
    Dimensions,
    Button,
    Image,
    StyleSheet,
    TextInput
}
from 'react-native'
import {Ionicons, MaterialCommunityIcons, SimpleLineIcons, FontAwesome, FontAwesome5 } from 'react-native-vector-icons'
import color from '../css/ColorConstant'
import { TouchableOpacity } from 'react-native-gesture-handler';
const { height, width } = Dimensions.get('screen');
export default class ConfirmBooking extends React.Component {
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
    render() {
        const urlImg = this.props.navigation.getParam('image');
        const name = this.props.navigation.getParam('name');
        const price = this.props.navigation.getParam('price')
        const rating = this.props.navigation.getParam('rating');
        var date_start = this.props.navigation.getParam('date_start')
        const date_end = this.props.navigation.getParam('date_end')
        const num_days = (Date.parse(date_end) - Date.parse(date_start))/ (1000 * 3600 * 24)
        const name_guest = this.props.navigation.getParam('name_guest')
        const phone_number = this.props.navigation.getParam('phone_number');
        const email = this.props.navigation.getParam('email');
        const id_card = this.props.navigation.getParam('id_card');
        return(
            <SafeAreaView style={{flex: 1, backgroundColor: color.gray}}>
            <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: 36}}>
                <View style = {styles.titleSectionContainer}>
                    <Image 
                    style = {{width:130, height: 130,margin: 15, borderRadius: 10}}
                    source = {{uri:urlImg}}
                    ></Image>
                    <Text style = {{fontSize: 30, fontWeight: 'bold', paddingVertical: 40}}>{name}</Text>
                    <Text style = {{fontSize: 26, fontWeight: 'bold', paddingVertical: 40, marginLeft: 10}}>asdasd</Text>
                </View>
                <View style = {styles.informationSectionContainer}>
                    <Text style = {styles.textInfo}>
                        Full Name: {name_guest}
                    </Text>
                    <Text style = {styles.textInfo}>
                        Email: {email}
                    </Text>
                    <Text style = {styles.textInfo}>
                        Phone Number: {phone_number}
                    </Text>
                    <Text style = {styles.textInfo}>
                        ID: {id_card}
                    </Text>
                </View>
                <View style = {styles.checkDateSectionContainer}>
                    <View style = {{flexDirection: 'row', paddingHorizontal: 10, paddingVertical: 10, justifyContent: 'space-between'}}>
                        <Text style = {{fontSize: 24, fontWeight: '400'}}>Check-in</Text> 
                        <Text style = {{fontSize: 24, fontWeight: '400'}}>{String(date_start).slice(0,15)}</Text>
                    </View>
                    <View style = {{borderColor: color.gray, borderWidth: 1, flexDirection: 'row', paddingHorizontal: 10, paddingVertical: 10, justifyContent: 'space-between'}}>
                        <Text style = {{fontSize: 24, fontWeight: '400'}}>Check-out</Text> 
                        <Text style = {{fontSize: 24, fontWeight: '400'}}>{String(date_end).slice(0,15)}</Text>
                    </View>
                </View>
                    <View style = {styles.billSectionContainer}>
                        <View style = {{marginLeft: 10}}>
                            <Text style = {{marginTop: 10}}>
                                Total price for 1 room, {num_days} day(s)
                            </Text>
                            <Text style = {{fontWeight: 'bold', fontSize: 30, marginTop: 10, color: color.green}}>
                            {price * num_days}$
                            </Text>
                            <Text style = {{fontWeight: '300', marginTop: 6}}>
                                <Ionicons name='md-checkmark' size={16} color='green'/> Includes taxes and fees
                            </Text>
                            <Text style = {{fontWeight: '300', marginTop: 6}}>
                                <Ionicons name='md-checkmark' size={16} color='green'/> Free cancelation in 24 hours
                            </Text>
                        </View>
                    </View>
                <View>
                    <TouchableOpacity 
                    style = {{backgroundColor: color.blue, height: 60, width: '100%', alignItems: 'center'}}
                        onPress = {() => {}
                        }
                    >
                    <Text style= {{padding: 14, fontSize: 28}}>Book Now</Text>
                    </TouchableOpacity>
                </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: color.gray
    },
    textInfo: {
        fontSize: 20,
        paddingVertical: 5
    },
    titleSectionContainer: {
        flex:1,
        backgroundColor: color.white,
        height: 160
    },
    informationSectionContainer: {
        marginTop: 3,
        backgroundColor: color.white,
        height: 140
    },
    billSectionContainer: {
        marginTop: 3,
        backgroundColor: color.white,
        height: 130
    },
    checkDateSectionContainer: {
        marginTop: 3,
        backgroundColor: color.white,
        height: 100
    },
    input: {
        alignSelf: 'center', 
        width: '90%',
        borderBottomWidth: 1,
        borderBottomColor: color.gray,
        fontSize: 24,
        marginVertical: 15,
        backgroundColor: 'white'
    },
    nextBtn: {
        width: 120,
        alignSelf: 'flex-end',
        padding: 10,
        backgroundColor: color.blue,
        borderRadius: 10,
        marginRight: width/12
    },
    textBtn: {
        fontSize: 24, 
        alignSelf: 'center',       
        padding: 5
    }
})