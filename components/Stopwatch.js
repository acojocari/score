import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Platform,
    Dimensions,
    SectionList
} from 'react-native';

import {Col,Row,Grid} from "react-native-easy-grid";

const Stopwatch = () => {
    return (
        <View style={headerStyle.container}>
                <Text style ={headerStyle.text}>STOPWATCH</Text>
                <Text style ={headerStyle.text}>0</Text>
                <Text style ={headerStyle.text}>Start/Reset</Text>
        </View>
    );
}
export default Stopwatch;

const headerStyle = StyleSheet.create({
    container: {
//        width:"100%",
//        height:"10%",
        backgroundColor: '#8063FA',
//        justifyContent: "flex-start",
        alignItems: "center",
//        top:10,
        flexDirection: "column",
        marginLeft : 25,
        marginRight : 10,
        marginTop : 10,
        marginBottom : 20,
    },
    text: {
        color: "#000",
        fontSize: 13,
//        fontWeight: "bold",

    }
});