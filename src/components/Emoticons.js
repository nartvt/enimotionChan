import React, { Component } from 'react'
import { Text, View, Dimensions, Image } from 'react-native'
import EmoticonItem from './EmoticonItem';

const widthDevice = Dimensions.get('window').width;
const heightDevice = Dimensions.get('window').height;

export default class Emoticons extends Component {
    emoticonCollections = [
        { id: 1, url: require('../assets/emoji/e1.png') },
        { id: 2, url: require('../assets/emoji/e2.png') },
        { id: 3, url: require('../assets/emoji/e3.png') },
        { id: 4, url: require('../assets/emoji/e4.png') },
        { id: 5, url: require('../assets/emoji/e5.png') }
    ]
    state = {
        emoticonCurrent: { id: 1, url: require('../assets/emoji/e1.png') }
    }
    changeEmoticon = (newEmo) => {
        this.setState({
            emoticonCurrent: newEmo
        })
    }
    renderEmoticon = () => {
        return this.emoticonCollections.map((emoticon, index) => {
            return <View style={{ flex: 1, flexDirection: 'column',
            width: widthDevice/3 ,height:75 }} key={index}>
                <EmoticonItem item={emoticon} handleChangeEmoticon={this.changeEmoticon} />

            </View>
        })
    }
    render() {
        return (
            <>
                <View style={{flex:1, flexDirection:'row', 
                height: '20', 
                position:'relative' }}>
                    <Text>Are you feeling ?</Text>
                    <View style={{ maxHeight: heightDevice/2}}>
                        <Image style={{position:'absolute', 
                        top:'20%',
                        left:'15%',
                        width:'70%',
                        height: heightDevice/4
                        }} source={this.state.emoticonCurrent.url}>

                        </Image>
                    </View>
                </View>
                <View style={{flex:1, flexDirection:'row', flexWrap:'wrap'}}>
                    {this.renderEmoticon()}
                </View>
            </>
        )
    }
}
