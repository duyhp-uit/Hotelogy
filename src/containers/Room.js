import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    View,
    Text,
    Dimensions,
    StyleSheet
}
from 'react-native'
import { MaterialCommunityIcons, SimpleLineIcons, FontAwesome, FontAwesome5 } from 'react-native-vector-icons'
import color from '../css/ColorConstant'
const { height, width } = Dimensions.get('screen');
export default class Room extends React.Component {
    renderTitleSection() {
        return (
        <View style = {styles.titleSection}>
            <Text style = {{fontSize: 24, padding: 10}}>{this.props.navigation.getParam('name')}</Text>
            {this.renderRatings(this.props.navigation.getParam('rating'))}
        </View>
        )
    }
    renderImageCollectionSection() {
        return (
          <View></View>
        )
    }
    renderRatings(rating) {
        const star = new Array(5).fill(0);
        return (
            star.map((value, index) => {
                const activeStar = index < rating;
                return (
                    <FontAwesome 
                        style = {{padding: 2}}
                        name = 'star'
                        key = {`star-$(index)`}
                        color = {activeStar ? color.yellow : 'gray'}/>
                )
            })
        )
    }
    renderDetailRoomSection() {
        return (
        <View style = {styles.sectionContainer}>
            <View style = {{marginLeft: 10}}>
                <Text style = {{marginTop: 6}}>
                    <SimpleLineIcons name='size-fullscreen' size={16} />  Room Size: {(this.props.navigation.getParam('id')) % 2 === 1 ? '30 m2' : '45 m2'}
                </Text>
                <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                    <Text style={{color: 'green', paddingVertical: 10}}>
                        <FontAwesome name= 'wifi' size={16}></FontAwesome> Free Wifi 
                    </Text>
                    <Text style={{color: 'green', padding: 10}}>
                        <MaterialCommunityIcons name= 'city' size={16}></MaterialCommunityIcons> City View 
                    </Text>
                    <Text style={{color: 'green', padding: 10}}>
                        <FontAwesome name= 'bathtub' size={16}></FontAwesome> Bathub or shower
                    </Text>
                    <Text style={{color: 'green'}}>
                        <FontAwesome5 name= 'tv' size={16}></FontAwesome5> Flat-Screen TV 
                    </Text>
                </View>
            </View>
        </View>
        )
    }
    render() {
        return(
            <SafeAreaView style = {{flex: 1, backgroundColor: color.gray}}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: 36}}>
                    {this.renderTitleSection()}
                    {this.renderDetailRoomSection()}
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
    titleSection: {
        height: 50,
        fontSize: 24,
        backgroundColor: '#fff',
        flexDirection: 'row',
    },
    sectionContainer: {
        marginTop: 5,
        height: 140,
        fontSize: 24,
        backgroundColor: '#fff'
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