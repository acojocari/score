import React, {createContext, useReducer} from 'react';
import playersInitState from "./playersInitState";
import playerState from "./playerState";
export const GlobalContext = createContext({});


const GlobalProvider = ({children})=>{

    //pass de value for state
    //useReducer to change the state
    //this context will provide us the player state so far , then we can add functions
    //console.log('playersInitState' , playersInitState);
    const [players,playersDispatch]=useReducer(playerState,playersInitState);

    return <GlobalContext.Provider value={{players,playersDispatch}}>
        {children}
    </GlobalContext.Provider>
}

export default GlobalProvider;
