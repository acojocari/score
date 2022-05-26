import React, {createContext, useReducer} from 'react';
import playersInitState from "./playersInitState";
import reducer from "./reducer";

//Context Creation
//export const GlobalContext = createContext({});
export const GlobalContext = createContext();

//Provider Creation that will be consumed by the components
const GlobalProvider = ({children}) => {

    //let's pass values for App's State
    //useReducer to change the state
    //this context will provide us the player state so far , then we can add functions

    const [state,dispatch]=useReducer(reducer,playersInitState);

   // console.log(state);
    return <GlobalContext.Provider value={{state,dispatch}}>
        {children}
    </GlobalContext.Provider>
}

export default GlobalProvider;
