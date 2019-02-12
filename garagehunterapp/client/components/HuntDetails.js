import React from 'react';
import {Platform, StyleSheet, Text, View, Button, Dimensions,Image } from 'react-native';
import MapView from 'react-native-maps';
const _HEIGHT = Dimensions.get('window').height;
const _WIDTH = Dimensions.get('window').width;

class HuntDetails extends React.Component{

    constructor(props){
        super(props);
    }
    styles = ()=>{
        let rowSize =  {_height:(_HEIGHT * .24),_width:(_WIDTH * .95)};
        return StyleSheet.create({
            container: {
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection:"column"
            },
            mapContainer:{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                flex:2
            },
            imageRow:{
                flex:1,
                width: rowSize._width*.3,
                height: rowSize._height,
            }
        });
    };
    render() {
        let self = this;
        const {hunt} = self.props;
        if(!self.props.hunt){
            return(
                <View>
                    <Image
                        style={self.styles().imageRow}
                        source={require('../assets/not_available.jpg')} />
                    <Text>No Garage Sale</Text>
                </View>
            )
        }
        return (
            <View style={this.styles().container}>
                <View style={this.styles().mapContainer}>
                    <MapView
                        style={this.styles().mapContainer}
                        initialRegion={{
                            latitude: self.props.hunt.latitude,
                            longitude: self.props.hunt.longitude,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421
                        }}
                    />
                </View>
                <View style={{flex:2}}>
                    <Text>{hunt.address?hunt.address:""}</Text>
                    <Text>LONGITUDE: {hunt.longitude}</Text>
                    <Text>LATITUDE: {hunt.latitude}</Text>
                </View>
            </View>
        );
    }
}
// export default HomePage
export default HuntDetails
