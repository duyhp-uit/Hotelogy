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
export default class InfoInput extends React.Component {
    render() {
        return(
            <SafeAreaView style={{flex: 1,
                 paddingHorizontal: 10}}>
                    <TextInput
                        style= {styles.input}
                        autoFocus
                        placeholder = 'Name'/>
                    <TextInput
                        style= {styles.input}
                        keyboardType= 'email-address'
                        placeholder = 'Email'/>
                    <TextInput
                        style= {styles.input}
                        
                        keyboardType = 'phone-pad'
                        placeholder = 'Phone Number'/>
                    <TextInput
                        style= {styles.input}
                        placeholder = 'Address'/>
                    <TextInput
                        style= {styles.input}
                        placeholder = 'ID'/>
                    <TouchableOpacity
                    style ={ styles.nextBtn}
                        onPress = {() => console.log("Next")}>
                        <Text style= {styles.textBtn}>Next</Text>
                    </TouchableOpacity>
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