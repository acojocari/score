import React, {useContext, useState} from 'react';
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
import {GlobalContext} from "./context/Provider";
import Icon from 'react-native-vector-icons/FontAwesome';

const AddPlayerForm = () => {
    //give the context to the component
    const context =useContext(GlobalContext);


    const [playerName,setName]= useState('');
    function handleSubmit(e){
        //to avoid the reflech page
        e.preventDefault()

        context.dispatch({type: 'addPlayer', payload:{id : new Date().getTime(), name: playerName, score : 0}})
        //clear the points
        setName('')
    }
    return (
        <KeyboardAvoidingView
            behovior={Platform.OS === "ios" ? "padding" :"height"}
            style ={addPlayerFormStyle.wrapper}>

            <TextInput
                style ={addPlayerFormStyle.input}
                placeholder={"Player name"}
                value={playerName}
                onChangeText={(value) => setName(value)}
            />
            <View  style ={addPlayerFormStyle.button}>
                <Pressable>
                    <Icon
                        name ="user-plus"
                        size={30}
                        color='#8063FA'
                        onPress={handleSubmit}
                    ></Icon>
                </Pressable>

            </View>

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
    button: {
        marginBottom : 5,
        flexDirection: "row",
        padding : 15,
    }
});
