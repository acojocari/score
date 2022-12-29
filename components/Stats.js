import React, {useContext, useState} from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import {GlobalContext} from "./context/Provider";

const Stats = () => {
    //give the context to the component
    const { state }=useContext(GlobalContext);
    console.log(state.data);

    const totalPlayers = state.data.length;
    const totalPoints = state.data.reduce( (total, player) => {
        return total + player.score;
    }, 0);

    return (
        <View style={headerStyle.container}>
            <Text style ={headerStyle.text}>Players: {totalPlayers}</Text>
            <Text style ={headerStyle.text}>Total Points: {totalPoints}</Text>
        </View>
    );
}
export default Stats;

const headerStyle = StyleSheet.create({
    container: {
        width:"100%",
        backgroundColor: '#8063FA',
        justifyContent: "center",
        alignItems: "flex-end",
        flexDirection: "column",
       // marginLeft : 20,
        marginRight : 10,
        marginTop : 20,
        marginBottom : 20
    },
    text: {
        color: "#000",
        fontSize: 13,
        fontWeight: "bold"
    }
});