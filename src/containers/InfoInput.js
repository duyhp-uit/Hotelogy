import React from 'react';
import {
    AsyncStorage,
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
            id: null
        }
    }
    getData = async () => {
        try {
        var data= [];
          var name = await AsyncStorage.getItem('@profile:name');
          var email = await AsyncStorage.getItem('@profile:email');
          var phone_number = await AsyncStorage.getItem('@profile:phone_number');
          var id = await AsyncStorage.getItem('@profile:id');
          var address = await AsyncStorage.getItem('@profile:address');
          data['name'] = name.slice(1,-1);
          data['email'] = email.slice(1,-1);
          data['phone_number'] = phone_number.slice(1,-1);
          data['id'] = id.slice(1,-1);
          data['address'] = address.slice(1,-1);
          return data;
        } catch (error) {
          // Error retrieving data
        }
      };
      componentDidMount(){
        this.getData().then(result => this.setState( data => ({
            name: result.name,
            email:  result.email,
            phone_number: result.phone_number,
            id: result.id,
            address: result.address
        })))
      }
    render() {
        var valid = true;
        return(
            <SafeAreaView style={{flex: 1, paddingHorizontal: 10}}>
                <Text style = {{fontSize: 24}}> Please enter full information: </Text>
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
                    onChangeText = {(id) => this.setState({id})}
                    value = {this.state.id}/>
                <TouchableOpacity
                    style= {styles.nextBtn}
                    onPress = {() => {
                        Object.keys(this.state).map(item => {
                            if (!this.state[item]) {
                                valid = false;
                            }
                        })
                        if (valid) {
                            this.props.navigation.navigate('FinishBooking', {
                            id: this.props.navigation.getParam('id'),
                            name: this.props.navigation.getParam('name'),
                            description: this.props.navigation.getParam('description'),
                            image: this.props.navigation.getParam('image'),
                            price: this.props.navigation.getParam('price'),
                            rating: this.props.navigation.getParam('rating'),
                            date_start: this.props.navigation.getParam('date_start'),
                            date_end: this.props.navigation.getParam('date_end'),
                            name_guest: this.state.name,
                            phone_number: this.state.phone_number,
                            address: this.state.address,
                            email: this.state.email,
                            id_card: this.state.id
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