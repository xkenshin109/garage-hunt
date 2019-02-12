import React from 'react';
import {Platform, StyleSheet, Text, View, Button, Dimensions,Image} from 'react-native';
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
    render() {
        let self = this;
        const {hunt} = self.props;
        return (
            <View style={this.styles().container}>
                <View style={{flex:2}}>
                    <Image
                        style={self.styles().imageRow}
                        source={require('../assets/not_available.jpg')} />
                </View>
                <View style={{flex:4}}>
                    <Text>{hunt.address?hunt.address:""}</Text>
                    <Text>LONGITUDE: {hunt.longitude}</Text>
                    <Text>LATITUDE: {hunt.latitude}</Text>
                </View>
            </View>
        );
    }
}
// export default HomePage
export default HuntTableRow
