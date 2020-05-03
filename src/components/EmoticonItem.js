import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Dimensions,Image } from 'react-native'

const widthDevice = Dimensions.get('window').width;
const heightDevice = Dimensions.get('window').height;

export default class EmoticonItem extends Component {
    render() {
        let {item,handleChangeEmoticon}= this.props;
        return (
           <TouchableOpacity onPress={()=>{
               handleChangeEmoticon(item)}}>
               <View>
                <Image style={{width:widthDevice/4,height: 40, margin:'10%',
                marginTop: '50%'}} resizeMode='stretch' source={item.url}></Image>
               </View>
           </TouchableOpacity>
        )
    }
}
