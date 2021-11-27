import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    SafeAreaView,
    Platform,
    Dimensions,
    Pressable,
    TouchableOpacity,
    KeyboardAvoidingView,
    TextInput
} from 'react-native';

const AddPlayerForm = (props) => {
    return (
        <KeyboardAvoidingView
            behovior={Platform.OS === "ios" ? "padding" :"height"}
            style ={addPlayerFormStyle.wrapper}
        >
            <TextInput style ={addPlayerFormStyle.input} placeholder={"Enter a player's name"}/>
            <TouchableOpacity>
                <View  style ={addPlayerFormStyle.button}>
                    <Text style ={addPlayerFormStyle.plus}>+</Text>
                </View>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    );
}

export default AddPlayerForm;

const addPlayerFormStyle = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        padding : 15,
        borderRadius : 15,
        justifyContent: "space-between",
        alignItems: "center",
        top:15,
        flexDirection: "row",
        marginBottom : 5
    },
    wrapper:{
        position:'absolute',
        bottom: 20,
        width:'100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    input: {
        paddingVertical : 10,
        paddingHorizontal : 10,
        width : 300,
        backgroundColor: '#FFF',
        borderRadius: 60,
        borderColor:'#8063FA',
        borderWidth:1
    },
    button:{
        width:60,
        height:60,
        backgroundColor : '#FFF',
        borderRadius:60,
        justifyContent:'center',
        alignItems:'center',
        borderColor:'#8063FA',
        borderWidth: 1
    },
    plus:{
        color:'#8063FA',
        fontSize: 20,
        justifyContent:'center',
        alignItems:'center'
    }
});
