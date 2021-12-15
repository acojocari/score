//Consumer allows to access the value in your component
import React, {useContext} from 'react';
import {
    StyleSheet,
    FlatList,
} from 'react-native';
import Player from "./Player";
import {GlobalContext} from "./context/Provider";

const PlayerList = () => {

    //give the context to the component
    const {
        players:{data}
    }=useContext(GlobalContext);

    console.log('players',data);

    return (
        <FlatList
            data={data}
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