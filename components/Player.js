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

    const truncate = (str, n) => {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    };
    function handleSubmitt(e){
        //to avoid the refresh page
        e.preventDefault()
        context.dispatch({type: 'updatePlayer', payload:{id : props.id, name: props.name, score: parseInt(props.score) + parseInt(points)}})
        //clear the points
        setPoints('')
    }
    return (
        <View style={playerStyle.container}>
            <Pressable style ={playerStyle.button}>
                <Icon
                    name ="remove"
                    size={20}
                    color="#de0101"
                    onPress={() => context.dispatch({type: 'removePlayer', payload:{id : props.id}})}
                ></Icon>
            </Pressable>

            <Text style ={playerStyle.content}>{truncate(props.name,20)}</Text>

            <Text style ={playerStyle.content}>{props.score}</Text>

            <TextInput
                style={playerStyle.input}
                placeholder="vp"
                keyboardType="numeric"
                value={points}
                onChangeText={(value) => setPoints(value)}

            />
            <Pressable style ={playerStyle.button}>
                <Icon
                    name ="plus"
                    color = "#8063FA"
                    size={20}
                    onPress={handleSubmitt}
                ></Icon>
            </Pressable>

        </View>
    );
}

export default Player;

const playerStyle = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        padding : 15,
        borderRadius : 15,
        alignItems: "center",
        top:15,
        flexDirection: "row",
        marginBottom : 5
    },
    content: {
//        color: "#000",
    //    fontSize: 15,
      //  fontWeight: "bold",
        width: 120,
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
         width : 25,
     //   height : 10,
//        paddingVertical : 10,
//        paddingHorizontal : 10,
//        width : 300,
//        fontSize: 10,
        backgroundColor: '#e1e0e0',
        borderRadius: 10,
//        borderColor:'#8063FA',
//        borderWidth:1
    },
    button:{
        padding:10
    }

});
