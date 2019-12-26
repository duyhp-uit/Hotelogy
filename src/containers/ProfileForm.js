import React, {Component} from 'react';
import {Alert, AsyncStorage, Text, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import { TextInput } from 'react-native-gesture-handler';

import * as RNFS from 'react-native-fs'
import color from '../css/ColorConstant'
class ProfileForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            'name': profile.name,
            'email': profile.email,
            'address': profile.address,
            'phone_number': profile.phone_number,
            'id': profile.id
        }
    }
    updateProfile(form, file) {
        // AsyncStorage.setItem('UID123', JSON.stringify(file), () => {
        //     AsyncStorage.mergeItem('UID123', JSON.stringify(form), () => {
        //       AsyncStorage.getItem('UID123', (err, result) => {
        //          });
        //     });
        //   });
        RNFS.writeFile('../data/test', 'content', 'ascii').then(res => {
        
        })
        .catch(err => {
            
            console.log(err.message, err.code);
        
        });
    }
	render() {
        console.log(profile);
    	return (
			<SafeAreaView>
                <ScrollView>
                <Text style = {{fontSize: 18, marginHorizontal: 15, marginTop: 20}}> Full name: </Text>
                <TextInput
                    style = {styles.textInput}
                    onChangeText = {(name) => this.setState({name})}
                    value = {this.state.name}/>
                <Text style = {{fontSize: 18, marginHorizontal: 15, marginTop: 20}}> Email: </Text>
                <TextInput
                    style = {styles.textInput}
                    onChangeText = {(email) => this.setState({email})}
                    value = {this.state.email}
                />
                <Text style = {{fontSize: 18, marginHorizontal: 15, marginTop: 20}}> Phone Number: </Text>
                <TextInput
                    style = {styles.textInput}
                    onChangeText = {(phone_number) => this.setState({phone_number})}
                    value = {this.state.phone_number}
                />
                <Text style = {{fontSize: 18, marginHorizontal: 15, marginTop: 20}}> Address: </Text>
                <TextInput
                    style = {styles.textInput}
                    onChangeText = {(address) => this.setState({address})}
                    value = {this.state.address}
                />
                <Text style = {{fontSize: 18, marginHorizontal: 15, marginTop: 20}}> ID: </Text>
                <TextInput
                    style = {styles.textInput}
                    onChangeText = {(id) => this.setState({id})}
                    value = {this.state.id}
                />
                <TouchableOpacity 
                    style = {{width: 90, height: 50, backgroundColor: color.blue, alignSelf: 'center'}}
                    onPress = {() => this.updateProfile(this.state, profile)     
                    }
                >
                    <Text style = {{alignSelf: 'center', justifyContent: 'center', padding: 15, fontSize: 20}}>Update</Text>
                </TouchableOpacity>
                </ScrollView>
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