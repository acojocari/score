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

const Stats = () => {
    return (
        <View style={headerStyle.container}>
            <Text style ={headerStyle.text}>Players:5</Text>
            <Text style ={headerStyle.text}>Total Points:120</Text>
        </View>
    );
}
export default Stats;

const headerStyle = StyleSheet.create({
    container: {
//        width:"100%",
//        height:"10%",
        backgroundColor: '#8063FA',
//        justifyContent: "center",
        alignItems: "flex-end",
//        top:10,
        flexDirection: "column",
        marginLeft : 20,
        marginRight : 10,
        marginTop : 20,
        marginBottom : 20,
    },
    text: {
        color: "#000",
        fontSize: 13,
//        fontWeight: "bold",

    }
});