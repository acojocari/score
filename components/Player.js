import React , {useContext, useReducer,useState} from 'react';
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
    TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {GlobalContext} from "./context/Provider";


const Player = (props) => {
    //give the context to the component
    const context =useContext(GlobalContext);
   // let number;
    const [points,setPoints]= useState('');
    function handleSubmitt(e){
        //to avoid the refresh page
        e.preventDefault()
        context.dispatch({type: 'updatePlayer', payload:{id : props.id, name: props.name, score: parseInt(props.score) + parseInt(points)}})
        //clear the points
        setPoints('')
    }
    return (
        <View style={playerStyle.container}>
            <Pressable>
                <Icon
                    name ="remove" size={20}
                    color="#de0101"
                    onPress={() => context.dispatch({type: 'removePlayer', payload:{id : props.id}})}
                ></Icon>
            </Pressable>

            <Text style ={playerStyle.namePlayer}>{props.name}</Text>

            <Text>{props.score}</Text>

            <TextInput
                style={playerStyle.input}
                placeholder="enter"
                keyboardType="numeric"
               value={points}
                onChangeText={(value) => setPoints(value)}

            />
            <Button
                title="Update"
                onPress ={handleSubmitt}/>

        </View>
    );
}

export default Player;

const playerStyle = StyleSheet.create({
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
    namePlayer: {
//        color: "#000",
        fontSize: 15,
        fontWeight: "bold",
        paddingRight: 100,
    },
    addScore: {
        width : 10,
        height : 10,
        backgroundColor:'#8063FA',
        justifyContent: 'center',
        alignItems :'center',
        borderWidth : 2,
        borderRadius: 5
    },
    input:{
//        width : 20,
     //   height : 10,
//        paddingVertical : 10,
//        paddingHorizontal : 10,
//        width : 300,
//        fontSize: 10,
        backgroundColor: '#e1e0e0',
        borderRadius: 10,
//        borderColor:'#8063FA',
//        borderWidth:1
    }

});
