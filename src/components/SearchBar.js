import React, { Component } from "react";
import {
    View,
    TextInput
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

class SearchBar extends Component {
    render() {
        return (
            <View
            style={{
              backgroundColor: "white",
              height: 80,
              borderBottomWidth: 1,
              borderBottomColor: "#dddddd"
            }}
          >
            <View
              style={{
                flexDirection: "row",
                padding: 10,
                backgroundColor: "white",
                marginHorizontal: 20,
                shadowOffset: { width: 0, height: 0 },
                shadowColor: "black",
                shadowOpacity: 0.2
              }}
            >
              <Icon name="ios-search" size={20} style={{ marginRight: 10 }} />
              <TextInput
                underlineColorAndroid="transparent"
                placeholder="Try New World"
                placeholderTextColor="grey"
                style={{ flex: 1, fontWeight: "700", backgroundColor: "white" }}
              />
            </View>
          </View>
        );
    }
}
export default SearchBar;



