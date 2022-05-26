//https://www.youtube.com/watch?v=7jjjQu-A1qs
//https://www.youtube.com/watch?v=26ogBZXeBwc
//https://dmitripavlutin.com/react-usereducer/
//https://www.aleksandrhovhannisyan.com/blog/managing-complex-state-react-usereducer/
//https://fr.reactjs.org/docs/hooks-reference.html
//https://medium.com/weekly-webtips/react-native-text-input-forms-simplified-with-usereducer-hook-a932d8533213
//Passing the dispatch on 2nd parameter in order to change the App's state

import React, {useReducer} from 'react'

const reducer = (state, action) => {

    switch (action.type){
        case 'updatePlayer' :
            /*return state.data.map(player => {
                if(player.id === action.payload.id){
                    return {...player, score : player.score + action.payload.score}
                }
                return player
            })*/
            return{
                ...state,
                data: [...state.data.filter((player) => player.id !== action.payload.id), action.payload]
            }
        case 'removePlayer' :
            return {
                ...state,
                data: state.data.filter((player) => player.id !== action.payload.id),
            }
            case 'addPlayer' :
                return {
                    ...state,
                    data: [...state.data, action.payload] }
        default:
            return state

    }
};

export default reducer;