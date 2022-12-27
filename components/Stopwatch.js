import React, {useCallback, useContext, useState,useRef} from 'react';
import {
    Button,
    StyleSheet,
    Text, TouchableOpacity,
    View
} from 'react-native';
import {GlobalContext} from "./context/Provider";


const Stopwatch = (props) => {

    //give the context to the component
    const { context }=useContext(GlobalContext);
    //console.log(props);
    const padToTwo = (number) => (number <= 9 ? `0${number}`: number); //ex 7 --> 07, 17 --> 17

    const displayTime = (centiseconds) => {
        let hours = 0;
        let minutes = 0;
        let seconds = 0;


        if(centiseconds<0){
            centiseconds = 0;
        }
        if(centiseconds <100){
            return `00:00:00,${padToTwo(centiseconds)}`//if the centisecods is 77 then the output will be : 00:00:00.77
        }

        let remainCentiseconds = centiseconds % 100;
        seconds = (centiseconds - remainCentiseconds) / 100;
        if (seconds < 60) {
            return `00:00:${padToTwo(seconds)},${padToTwo(remainCentiseconds)}`;
        }

        let remainSeconds = seconds % 60;
        minutes = (seconds - remainSeconds) / 60;

        if (minutes < 60) {
            return `00:${padToTwo(minutes)}:${padToTwo(remainSeconds)},${padToTwo(remainCentiseconds)}`;
        }

        let remainMinutes = minutes % 60;
        hours = Math.floor(centiseconds  / 360000);

        return `${padToTwo(hours)}:${padToTwo(remainMinutes)}:${padToTwo(remainSeconds)},${padToTwo(remainCentiseconds)}`;
    }

    const [time,setTime]  = useState(0);
    const [isRunning,setRunning] = useState(false);
    const [results,setResults]= useState([]);
    const timer  = useRef(null);

//console.log(state);
    const handleStopButton = useCallback(()=>{

        if(isRunning){
            setResults((previousResults) => [time,...previousResults])
        }else{
            setResults([]);
            setTime(0);
        }
    },[isRunning,time]);


    //useCallback hook is helpul when passing callback propos to highly child components
    const handleStartButton = useCallback(()=>{
        if(!isRunning){
            const interval = setInterval(()=>{
                setTime((previousTime) => previousTime+1);
            },10);
            timer.current=interval;
        }else{
            clearInterval(timer.current);
        }
        setRunning((previousState)=>!previousState);

    },[isRunning]);
    // we will deal with buttons
    return (
        <View style={headerStyle.container}>
                <Text style ={headerStyle.text}>STOPWATCH</Text>

                <Text style ={headerStyle.text}>{displayTime(time)}</Text>

                <TouchableOpacity  style ={{backgroundColor: isRunning? '#333333':'#1c1c1e'}} onPress={handleStartButton}>
                    <View>
                        <Text style = {{color :isRunning ? '#ea4C49': '#37d05c'}}>
                            {isRunning ? "STOP":"START"}
                        </Text>
                    </View>

                </TouchableOpacity>

        </View>
    );
}
export default React.memo(Stopwatch); //if the previous render is the same then will keeps the previous one

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

    },
    button: {
         flexDirection: "row",

    }
});