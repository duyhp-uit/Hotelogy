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
    TextInput
}
from 'react-native'
import {Ionicons, MaterialCommunityIcons, SimpleLineIcons, FontAwesome, FontAwesome5 } from 'react-native-vector-icons'
import color from '../css/ColorConstant'
import { TouchableOpacity } from 'react-native-gesture-handler';
const { height, width } = Dimensions.get('screen');
export default class FinishBooking extends React.Component {
    render() {
        console.log(this.props.navigation.getParam('name_guest'))
        return(
            <SafeAreaView style={{flex: 1,
                paddingHorizontal: 10, backgroundColor: color.gray}}>
                
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: color.gray
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