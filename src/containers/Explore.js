import React, { Component } from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import SearchBar from '../components/SearchBar';
import Category from "../components/Category";
class Explore extends Component {
  render() {
    return (
		<SafeAreaView style={{ flex: 1 }}>
        <SearchBar></SearchBar>
		<View style={{ height: 130, marginTop: 20}}>
			<Text
				style={{
				fontSize: 24,
				fontWeight: "700",
				paddingHorizontal: 20
				}}
			>
      		What can we help you find, Kriss?
			</Text>
			<ScrollView
				scrollEventThrottle={16}
				horizontal={true}
				showsHorizontalScrollIndicator={false}
  			>
    			<Category
					imageUri={require("../assets/home.jpg")}
					name="Home"
				/>
				<Category
					imageUri={require("../assets/experiences.jpg")}
					name="Experiences"
				/>
				<Category
					imageUri={require("../assets/restaurant.jpg")}
					name="Restaurant"
				/>
			</ScrollView>
		</View>
		<View style={{ flex: 1, marginTop: 40, paddingHorizontal: 20 }}>
			<Text style={{ fontSize: 24, fontWeight: "700" }}>
			Introducing Hotelogy Plus
			</Text>
			<Text style={{ fontWeight: "100", marginTop: 10 }}>
			A new selection of hotel rooms verified for quality & comfort
			</Text>
		</View>
		</SafeAreaView>
    );
  }
}
export default Explore;