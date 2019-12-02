import React from 'react';
import {
    SafeAreaView,
    Text,
    Dimensions,
    StyleSheet,
    TextInput,
    Alert
}
from 'react-native'
import color from '../css/ColorConstant'
import { TouchableOpacity } from 'react-native-gesture-handler';
const { height, width } = Dimensions.get('screen');
export default class InfoInput extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: null,
            email: null,
            phone_number: null,
            address: null,
            id_card: null
        }
    }
    render() {
        var valid = true;
        return(
            <SafeAreaView style={{flex: 1, paddingHorizontal: 10}}>
                <TextInput
                    style= {styles.input}
                    autoFocus
                    placeholder = 'Name'
                    onChangeText = {(name) => this.setState({name})}
                    value = {this.state.name}/>
                <TextInput
                    style= {styles.input}
                    keyboardType= 'email-address'
                    placeholder = 'Email'
                    onChangeText = {(email) => this.setState({email})}
                    value = {this.state.email}/>
                <TextInput
                    style= {styles.input}
                    keyboardType = 'phone-pad'
                    placeholder = 'Phone Number'
                    onChangeText = {(phone_number) => this.setState({phone_number})}
                    value = {this.state.phone_number}/>
                <TextInput
                    style= {styles.input}
                    placeholder = 'Address'
                    onChangeText = {(address) => this.setState({address})}
                    value = {this.state.address}/>
                <TextInput
                    style= {styles.input}
                    placeholder = 'ID'
                    onChangeText = {(id_card) => this.setState({id_card})}
                    value = {this.state.id_card}/>
                <TouchableOpacity
                    style= {styles.nextBtn}
                    onPress = {() => {
                        Object.keys(this.state).map(item => {
                            if (!this.state[item]) {
                                valid = false;
                            }
                        })
                        console.log(valid)
                        if (valid) {
                            this.props.navigation.navigate('FinishBooking', {
                            id: this.props.navigation.getParam('id'),
                            name: this.props.navigation.getParam('name'),
                            description: this.props.navigation.getParam('description'),
                            image: this.props.navigation.getParam('image'),
                            price: this.props.navigation.getParam('price'),
                            rating: this.props.navigation.getParam('rating'),
                            name_guest: this.state.name,
                            phone_number: this.state.phone_number,
                            address: this.state.address,
                            email: this.state.email,
                            id_card: this.state.id_card
                        })
                        } else {
                            Alert.alert('Please fill out the form')  
                        }
                    }}>
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