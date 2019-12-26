import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    View,
    Text,
    Dimensions,
    Button,
    StyleSheet,
    Modal
}
from 'react-native'
import color from '../css/ColorConstant'
import ImageViewer from 'react-native-image-zoom-viewer';
 
export default class Room extends React.Component {
    render () {
        const images = [{
            // Simplest usage.
            url: this.props.navigation.getParam('image'),
        },
        {
            // Simplest usage.
            url: 'https://cdn.vietnambiz.vn/stores/news_dataimages/lannh/102016/13/18/4649_abc.jpg'
        }, 
        
        {
            url: 'https://images.unsplash.com/photo-1458906931852-47d88574a008?auto=format&fit=crop&w=800&q=80'
        }]
        return (
                <Modal visible={true} transparent={false}>
                    <View style = {{marginTop: 30, marginLeft: 20}}>
                    <Button title="Back" onPress={ () => {
                /* go back from *EditCover* to *Cover* */
                this.props.navigation.goBack();
                     }} />
                    </View>
                    <ImageViewer 
                        imageUrls={images}
                        enablePreload = {true}
                        enableSwipeDown = {true}
                        onSwipeDown = {() =>  this.props.navigation.goBack('')} 
                    />
                </Modal>
        )
    }
}