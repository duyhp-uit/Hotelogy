import React from "react";
import {
    SafeAreaView,
    Text,
    Image,
    Dimensions,
    View,
    StyleSheet,
    ScrollView,
    
} from 'react-native'
import baseUrl from "../config/baseUrl";
const {height, width} = Dimensions.get('screen');
export default class News extends React.Component {
    render() {
        return(
            <SafeAreaView style = {{flex: 1}}>
                <ScrollView>
                <Image
                    style = {styles.imgTitle}
                    source={{uri: baseUrl + this.props.navigation.getParam('image')}}   
                ></Image>
                <View style = {styles.container}>
                    <Text style = {styles.title}>
                    {this.props.navigation.getParam('name')}
                    </Text>
                    <Text style = {styles.datetime}>
                        {this.props.navigation.getParam('created_at')}
                    </Text>
                    <View style = {{borderStyle: 'solid', borderWidth: 2, borderBottomColor: '#fff'}}>
                    </View>
                    <Text style = {styles.content}>
                        {this.props.navigation.getParam('content')}
                    </Text>
                </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create( {
    container: {
        paddingHorizontal: 30
    },
    imgTitle: {
        width: width,
        height: 240,
        marginVertical: 12
    },
    title: {
        fontSize: 24,
        paddingVertical: 10
    },
    datetime: {
        fontSize:12,
        fontStyle: 'italic',
        textAlign: 'right',
        fontWeight: '300',
    },
    content: {
        lineHeight: 26
    }

})