import React, {useContext} from 'react';
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
import {GlobalContext} from "./context/Provider";

const Header = () => {
    //give the context to the component
    const { state }=useContext(GlobalContext);

    return (
        <View style={headerStyle.container}>
            <View>
                <Stats />
            </View>

            <Text style ={headerStyle.text}>SCORE GAME</Text>

            <View>
                <Stopwatch elapsedTime={state.timer.elapsedTime} isRunning={state.timer.isRunning}/>
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
        flexDirection: "row",
        paddingVertical : 10,
    },
    text: {
        color: "#000",
        fontSize: 20,
        fontWeight: "bold",
        paddingLeft : 25
    }
});
