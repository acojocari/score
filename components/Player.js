import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    SafeAreaView,
    Platform,
    Dimensions,
    Pressable,
    TouchableOpacity,
    TextInput
} from 'react-native';

const Player = (props) => {
    return (
        <View style={playerStyle.container}>
            <Pressable>
                <Text onPress={() => console.warn('Removed')} style ={playerStyle.removePlayer}>x</Text>
            </Pressable>
            <Text style ={playerStyle.namePlayer}>{props.name}</Text>
            <Text>455</Text>
            <TextInput style ={playerStyle.input} placeholder={"..."}/>
            <Pressable
                onPress={() => console.warn('Pressed')}
                style ={playerStyle.addScore}>
                <Text>Enter</Text>
            </Pressable>
        </View>
    );
}

export default Player;

const playerStyle = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        padding : 15,
        borderRadius : 15,
        justifyContent: "space-between",
        alignItems: "center",
        top:15,
        flexDirection: "row",
        marginBottom : 5
    },
    namePlayer: {
//        color: "#000",
        fontSize: 15,
        fontWeight: "bold",
        paddingRight: 100,
    },
    removePlayer: {
        color:'#de0101',
        fontSize: 20,
        justifyContent:'center',
        alignItems:'center',
        fontWeight: "bold",
    },
    addScore: {
        width : 10,
        height : 10,
        backgroundColor:'#8063FA',
        justifyContent: 'center',
        alignItems :'center',
        borderWidth : 2,
        borderRadius: 5
    },
    input:{
        width : 20,
     //   height : 10,
//        paddingVertical : 10,
//        paddingHorizontal : 10,
//        width : 300,
        fontSize: 10,
        backgroundColor: '#FFF',
//        borderRadius: 60,
//        borderColor:'#8063FA',
//        borderWidth:1
    }

});
