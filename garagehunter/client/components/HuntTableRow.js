import React from 'react';
import {Platform, StyleSheet, Text, View, Button, Dimensions,Image, TouchableHighlight } from 'react-native';
import MapView from 'react-native-maps';
const _HEIGHT = Dimensions.get('window').height;
const _WIDTH = Dimensions.get('window').width;

class HuntTableRow extends React.Component{

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
              width: rowSize._width,
              height: rowSize._height,
              backgroundColor: (this.props.color==="even"?'#FFD45F':'#FFFCF3'),
              flexDirection:"row"
          },
          imageRow:{
              flex:1,
              width: rowSize._width*.3,
              height: rowSize._height,
          }
      });
    };

    showDetails = (self) => {
       self.props.parent.showDetails(self.props.hunt,true);
    };
    renderMap = () =>{
        let self = this;
        if(!self.props.hunt.longitude || !self.props.hunt.latitude){
            return (
                <Image
                    style={self.styles().imageRow}
                    source={require('../assets/not_available.jpg')} />
            )
        }
        return (
            <Image
                style={self.styles().imageRow}
                source={require('../assets/icon1.jpg')} />
        )
    };
    render() {
        let self = this;
        const {hunt} = self.props;
        return (
                <TouchableHighlight
                    onPress={()=>{self.showDetails(self)}}
                >
                <View style={this.styles().container}>
                    <View style={{flex:2}}>
                        {self.renderMap()}
                    </View>
                    <View style={{flex:4}}>
                        <Text>{hunt.address?hunt.address:""}</Text>
                        <Text>LONGITUDE: {hunt.longitude}</Text>
                        <Text>LATITUDE: {hunt.latitude}</Text>
                    </View>
                </View>
                </TouchableHighlight>

        );
    }
}
// export default HomePage
export default HuntTableRow
