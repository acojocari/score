import React from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';


const Stats = () => {
    const players = [
        {
            name: "Guil",
            score: 3,
            id: 1
        },
        {
            name: "Treasure",
            score: 45,
            id: 2
        },
        {
            name: "Ashley",
            score: 66,
            id: 3
        },
        {
            name: "James",
            score: 89,
            id: 4
        }
    ]

    const totalPlayers = players.length;
    const totalPoints = players.reduce( (total, player) => {
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