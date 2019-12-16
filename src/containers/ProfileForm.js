import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import { TextInput } from 'react-native-gesture-handler';
import color from '../css/ColorConstant'
class ProfileForm extends Component {
	render() {
    	return (
			<SafeAreaView>
                <Text style = {{fontSize: 18, marginHorizontal: 15, marginTop: 20}}> Full name: </Text>
                <TextInput
                    style = {styles.textInput}
                    onChangeText = {(name) => this.setState({name})}
                    value = 'Huynh Phuong Duy'/>
                <Text style = {{fontSize: 18, marginHorizontal: 15, marginTop: 20}}> Email: </Text>
                <TextInput
                    style = {styles.textInput}
                    onChangeText = {(name) => this.setState({name})}
                />
                <Text style = {{fontSize: 18, marginHorizontal: 15, marginTop: 20}}> Phone Number: </Text>
                <TextInput
                    style = {styles.textInput}
                    onChangeText = {(name) => this.setState({name})}
                />
                <Text style = {{fontSize: 18, marginHorizontal: 15, marginTop: 20}}> Email: </Text>
                <TextInput
                    style = {styles.textInput}
                    onChangeText = {(name) => this.setState({name})}
                />
                <Text style = {{fontSize: 18, marginHorizontal: 15, marginTop: 20}}> ID: </Text>
                <TextInput
                    style = {styles.textInput}
                    onChangeText = {(name) => this.setState({name})}
                />
                <TouchableOpacity 
                    style = {{width: 90, height: 50, backgroundColor: color.blue, alignSelf: 'center'}}
                >
                    <Text style = {{alignSelf: 'center', justifyContent: 'center', padding: 15, fontSize: 20}}>Update</Text>
                </TouchableOpacity>
			</SafeAreaView>
    	);
  	}
}

export default ProfileForm;

const styles =  StyleSheet.create({
    textInput: {
        backgroundColor: color.lessGray,
        borderWidth: 0.5,
        fontSize: 20,
        borderColor: 'gray',
        padding: 10,
        marginHorizontal: 20,
        marginVertical: 10
    }
})