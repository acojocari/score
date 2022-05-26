import React from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

const Stopwatch = (props) => {
    return (
        <View style={headerStyle.container}>
                <Text style ={headerStyle.text}>STOPWATCH</Text>
                <Text style ={headerStyle.text}>{props.elapsedTime}</Text>
                <Text style ={headerStyle.text}>Start/Reset</Text>
        </View>
    );
}
export default Stopwatch;

const headerStyle = StyleSheet.create({
    container: {
        width:"100%",
        backgroundColor: '#8063FA',
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        marginLeft : 20,
        marginRight : 10,
        marginTop : 20,
        marginBottom : 20,
        paddingRight:50
    },
    text: {
        color: "#000",
        fontSize: 13,
        fontWeight: "bold"

    }
});