import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Platform,
    Dimensions
} from 'react-native';
import Stats from "./Stats";
import Stopwatch from "./Stopwatch";

const Header = () => {
    return (
        <View style={headerStyle.container}>
            <Stats />
            <Text style ={headerStyle.text}>SCORE GAME</Text>
            <Stopwatch />
        </View>
    );
}

export default Header;

const headerStyle = StyleSheet.create({
    container: {
        width:"100%",
        height:"10%",
        backgroundColor: '#8063FA',
        //justifyContent: "center",
        alignItems: "center",
        top:10,
        flexDirection: "row",
    },
    text: {
        color: "#000",
        fontSize: 20,
        fontWeight: "bold",
        marginLeft : 5
    }
});
