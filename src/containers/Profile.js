import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableWithoutFeedback, Image, Button, AsyncStorage} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
class Profile extends Component {
	_retrieveData = async () => {
        try {
          const value = await AsyncStorage.getItem('@MySuperStore:key');
          if (value !== null) {
            // We have data!!
            console.log(value);
          }
        } catch (error) {
          // Error retrieving data
        }
      };
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
							Huynh Duy
						</Text>
						<Text style = {{fontSize: 12}}>
							kudophuongduy@gmail.com
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