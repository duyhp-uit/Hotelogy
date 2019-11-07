// import React, { Component } from "react";
// import { View, Text, SafeAreaView, ScrollView } from "react-native";
// import SearchBar from '../components/SearchBar';
// import Category from "../components/Category";
// class Explore extends Component {
//   render() {
//     return (
// 		<SafeAreaView style={{ flex: 1 }}>
//         <SearchBar></SearchBar>
// 		<View style={{ height: 130, marginTop: 20}}>
// 			<Text
// 				style={{
// 				fontSize: 24,
// 				fontWeight: "700",
// 				paddingHorizontal: 20
// 				}}
// 			>
//       		What can we help you find, Kriss?
// 			</Text>
// 			<ScrollView
// 				scrollEventThrottle={16}
// 				horizontal={true}
// 				showsHorizontalScrollIndicator={false}
//   			>
//     			<Category
// 					imageUri={require("../assets/home.jpg")}
// 					name="Home"
// 				/>
// 				<Category
// 					imageUri={require("../assets/experiences.jpg")}
// 					name="Experiences"
// 				/>
// 				<Category
// 					imageUri={require("../assets/restaurant.jpg")}
// 					name="Restaurant"
// 				/>
// 			</ScrollView>
// 		</View>
// 		<View style={{ flex: 1, 
			
// 			marginTop: 40, paddingHorizontal: 20 }}>
// 			<Text style={{ fontSize: 24, fontWeight: "700" }}>
// 			Introducing Hotelogy Plus
// 			</Text>
// 			<Text style={{ fontWeight: "100", marginTop: 10 }}>
// 			A new selection of hotel rooms verified for quality & comfort
// 			</Text>
// 		</View>
// 		</SafeAreaView>
//     );
//   }
// }
// export default Explore;
import React from "react";
import {
StyleSheet,
View,
ActivityIndicator,
FlatList,
Text,
TouchableOpacity
} from "react-native";
export default class Source extends React.Component {
static navigationOptions = ({ navigation }) => {
return {
  title: "Source Listing",
  headerStyle: {backgroundColor: "#fff"},
  headerTitleStyle: {textAlign: "center",flex: 1}
 };
};
constructor(props) {
 super(props);
 this.state = {
   loading: true,
   dataSource:[]
  };
}
componentDidMount(){
fetch("localhost:/test.json")
.then(response => response.json())
.then((responseJson)=> {
  this.setState({
   loading: false,
   dataSource: responseJson
  })
})
.catch(error=>console.log(error)) //to catch the errors if any
}
FlatListItemSeparator = () => {
return (
  <View style={{
     height: .5,
     width:"100%",
     backgroundColor:"rgba(0,0,0,0.5)",
}}
/>
);
}
renderItem=(data)=>
<TouchableOpacity style={styles.list}>
<Text style={styles.lightText}>{data.item.name}</Text>
<Text style={styles.lightText}>{data.item.email}</Text>
<Text style={styles.lightText}>{data.item.company.name}</Text></TouchableOpacity>
render(){
 if(this.state.loading){
  return( 
    <View style={styles.loader}> 
      <ActivityIndicator size="large" color="#0c9"/>
    </View>
)}
return(
 <View style={styles.container}>
 <FlatList
    data= {this.state.dataSource}
    ItemSeparatorComponent = {this.FlatListItemSeparator}
    renderItem= {item=> this.renderItem(item)}
    keyExtractor= {item=>item.id.toString()}
 />
</View>
)}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
   },
  loader:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
   },
  list:{
    paddingVertical: 4,
    margin: 5,
    backgroundColor: "#fff"
   }
});
