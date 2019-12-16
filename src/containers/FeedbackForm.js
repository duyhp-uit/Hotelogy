import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import { TextInput } from 'react-native-gesture-handler';
import color from '../css/ColorConstant'
class FeedbackForm extends Component {
	render() {
    	return (
			<SafeAreaView>
                <Text style = {{fontSize: 20, marginHorizontal: 15, marginTop: 20}}> Give your feedback about our hotel: </Text>
                <TextInput
                    autoFocus = {true}
                    style = {{ height: 120, borderColor: 'gray', borderWidth: 1, margin: 20 }}
                    multiline
                    numberOfLines = {4}
                >
                </TextInput>
                <TouchableOpacity 
                    style = {{width: 90, height: 50, backgroundColor: color.blue, alignSelf: 'center'}}
                >
                    <Text style = {{alignSelf: 'center', justifyContent: 'center', padding: 15, fontSize: 20}}>Send</Text>
                </TouchableOpacity>
			</SafeAreaView>
    	);
  	}
}

export default FeedbackForm;
