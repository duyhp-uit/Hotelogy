import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableWithoutFeedback, Image, AsyncStorage} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
class Profile extends Component {
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
    	return (
			<SafeAreaView>
				<TouchableWithoutFeedback
					onPress={() => this.props.navigation.navigate('ProfileForm')}
				>
				<View style = {styles.profileSection}>
					<Image
						style = {{height: 120, width: 120}}
						source = {{uri: 'https://previews.123rf.com/images/nexusby/nexusby1810/nexusby181000286/111362910-default-avatar-placeholder-profile-icon-male.jpg'}}
					>
					</Image>
					<View style = {{flexDirection: 'column', alignSelf: 'center'}}>
						<Text style = {{fontSize: 18 }}>
							{this.state.name}
						</Text>
						<Text style = {{fontSize: 12}}>
							{this.state.email}
						</Text>
					</View>
				</View>
				</TouchableWithoutFeedback>
				<TouchableWithoutFeedback
					onPress= {() => this.props.navigation.navigate('History')}
				>
				<View style = {styles.itemProfileSection}>
					<Text style = {styles.itemText}>History</Text>
				</View>
				</TouchableWithoutFeedback>
				<TouchableWithoutFeedback
					onPress= {() => this.props.navigation.navigate('FeedbackForm')}
				>
				<View style = {styles.itemProfileSection}>
					<Text style = {styles.itemText}>Give feedback</Text>
				</View>
				</TouchableWithoutFeedback>
				<TouchableWithoutFeedback
					onPress= {() => this._retrieveData()}
				>
				<View style = {styles.itemProfileSection}>
					<Text style = {styles.itemText}>Log out</Text>
				</View>
				</TouchableWithoutFeedback>
			</SafeAreaView>
    	);
  	}
}

export default Profile;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileSection: {
	  flexDirection: 'row',
	  margin: 20,
	  padding: 20,
	  borderWidth: 0.3,
	  borderRadius: 10,
	  borderStyle: 'solid'
  },
	itemProfileSection: {
		borderBottomWidth: 0.3,
		borderBottomColor: 'gray'
  },
  itemText: {
	fontSize: 18,
	padding: 10
  }
});