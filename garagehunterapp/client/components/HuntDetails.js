import React from 'react';
import {Platform, StyleSheet, Text, View, Button, Dimensions,Image } from 'react-native';
import {Card} from 'react-native-elements';
import MapView from 'react-native-maps';
const _HEIGHT = Dimensions.get('window').height;
const _WIDTH = Dimensions.get('window').width;

class HuntDetails extends React.Component{
    static navigationOptions =({navigation,navigationOptions})=>{

    };
    state = {
      parent: null,
      hunt: null,
    };
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
                // position: 'absolute',
                width:_WIDTH * .85,
                flex:1
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
        const hunt = self.props.navigation.state.params.hunt;
        if(!hunt){
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
                <Card title={"Map Location"}>
                <View style={{flex:1}}>

                    <MapView
                        style={this.styles().mapContainer}
                        initialRegion={{
                            latitude: hunt.latitude,
                            longitude: hunt.longitude,
                            latitudeDelta: 0.00822,
                            longitudeDelta: 0.00621
                        }}
                        scrollEnabled={false}
                        pitchEnabled={false}
                        rotateEnabled={false}
                        zoomEnabled={true}


                    >
                        <MapView.Marker
                            coordinate={{longitude:hunt.longitude,latitude:hunt.latitude}}
                            title={"Testing"}
                            description={"Testing again"}
                        />
                    </MapView>
                </View>
                </Card>
                <Card title={"Hunter Data"}>
                <View style={{flex:2}}>
                    <Text>{hunt.address?hunt.address:""}</Text>
                    <Text>LONGITUDE: {hunt.longitude}</Text>
                    <Text>LATITUDE: {hunt.latitude}</Text>
                </View>
                </Card>
            </View>
        );
    }
}
// export default HomePage
export default HuntDetails
