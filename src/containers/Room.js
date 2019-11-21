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
import {Ionicons} from 'react-native-vector-icons'

const {height, width} = Dimensions.get('screen');
export default class Room extends React.Component {
    renderTitleSection() {
        return (
        <View style = {styles.titleSection} >
            <Text style = {{fontSize: 24, padding: 10}}>{this.props.navigation.getParam('name')}</Text>
            {/* rating */}
        </View>
        )
    }
    renderImageCollectionSection() {
        return (
            <View style = {styles.collection}>
                <View style = {{marginLeft: 10}}>
                <Text style = {{fontWeight: 'bold', fontSize: 22}}>
                    {this.props.navigation.getParam('price')}$
                </Text>
                <Text style = {{fontWeight: '300', marginTop: 6}}>
                <Ionicons name='md-checkmark' size={16} color='green' /> Đã bao gồm thuế
                </Text>
                </View>
            </View>
        )
    }
    renderDetailRoomSection() {

    }
    render() {
        return(
            <SafeAreaView style = {{flex: 1, backgroundColor: '#c2cad1'}}>
                <ScrollView
                showsVerticalScrollIndicator={false}
			    contentContainerStyle={{ paddingBottom: 36}}
                >
                    {this.renderTitleSection()}
                    {this.renderImageCollectionSection()}
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
        backgroundColor: '#fff'
    },
    collection: {
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