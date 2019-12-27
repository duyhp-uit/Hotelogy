import React, {Component} from 'react';
import {Alert, AsyncStorage, Text, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import { TextInput } from 'react-native-gesture-handler';

import color from '../css/ColorConstant'
class ProfileForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email:  '',
            address:  '',
            phone_number:  '',
            id: ''
        }
    }
    updateProfile(form, file) {
    }
    _storeData = async () => {
        try {
            await AsyncStorage.setItem('@profile:name', JSON.stringify(this.state.name) || '');
            await AsyncStorage.setItem('@profile:email', JSON.stringify(this.state.email) || '');
            await AsyncStorage.setItem('@profile:address', JSON.stringify(this.state.address) || '');
            await AsyncStorage.setItem('@profile:phone_number', JSON.stringify(this.state.phone_number) || '');
            await AsyncStorage.setItem('@profile:id', JSON.stringify(this.state.id) || '');
        } catch (error) {
          // Error saving data
        }
      };
      _retrieveData = async () => {
        try {
          var name = await AsyncStorage.getItem('@profile:name');
          var email = await AsyncStorage.getItem('@profile:email');
          var phone_number = await AsyncStorage.getItem('@profile:phone_number');
          var id = await AsyncStorage.getItem('@profile:id');
          var address = await AsyncStorage.getItem('@profile:address');

          if (value !== null) {
            // We have data!!
                this.setState({
                    name: value.slice(1,-1),
                    email: value.slice(1,-1),
                    address: value.slice(1,-1),
                    phone_number: value.slice(1,-1),
                    id: value.slice(1,-1)
                })
          }
        } catch (error) {
          // Error retrieving data
        }
      };
	render() {
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
                    onPress = {() => this._storeData()        
                    }
                >
                    <Text style = {{alignSelf: 'center', justifyContent: 'center', padding: 15, fontSize: 20}}>Update</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style = {{width: 90, height: 50, backgroundColor: color.blue, alignSelf: 'center'}}
                    onPress = {() =>  this._retrieveData()}
                >
                    <Text style = {{alignSelf: 'center', justifyContent: 'center', padding: 15, fontSize: 20}}>Cancel</Text>
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