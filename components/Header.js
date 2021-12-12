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
            <View>
                <Stats />
            </View>

            <Text style ={headerStyle.text}>SCORE GAME</Text>

            <View>
                <Stopwatch />
            </View>
        </View>
    );
}

export default Header;

const headerStyle = StyleSheet.create({
    container: {
        width:"100%",
        height:"10%",
        backgroundColor: '#8063FA',
        justifyContent: "space-between",
        alignItems: "center",
        top:10,
        flexDirection: "row"
    },
    text: {
        color: "#000",
        fontSize: 20,
        fontWeight: "bold",
        paddingLeft : 25
    }
});
