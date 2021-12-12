import React from 'react';
import {
    StyleSheet,
    FlatList,
} from 'react-native';
import Player from "./Player";
//Consumer allows to access the value in your component

import Context from "./Context";

const PlayerList = () => {
    const players = [
        {
            name: "Guil",
            score: 0,
            id: 1
        },
        {
            name: "Treasure",
            score: 0,
            id: 2
        },
        {
            name: "Ashley",
            score: 0,
            id: 3
        },
        {
            name: "James",
            score: 0,
            id: 4
        }
    ]
    return (
        <FlatList
            data={players}
            renderItem={({item}) => <Player name={item.name} />}
        />
    );
}

export default PlayerList;

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