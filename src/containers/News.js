import React from "react";
import {SafeAreaView, Text, Image, Dimensions, View} from 'react-native'
const {height, width} = Dimensions.get('screen');
export default class News extends React.Component {
    render() {
        return(
            <SafeAreaView style = {{flex: 1}}>
                <Image 
                    style = {{width: width - 72, height: 240, marginHorizontal : 36, marginVertical: 12}}
                    source={{uri: 'https://facebook.github.io/react-native/img/tiny_logo.png'}}   
                ></Image>
                <View>
                    <Text style = {{marginLeft: 20, fontSize: 24}}>
                    Đây là tiêu đề tin tức
                    </Text>
                    <Text style = {{fontSize: 12, fontStyle: 'italic', textAlign: 'right', fontWeight: '300', marginRight: 20}}>
                        Thứ 4, 20-10-2019
                    </Text>
                </View>
                <View>
                    <Text>

                    </Text>
                </View>
            </SafeAreaView>
        )
    }
}