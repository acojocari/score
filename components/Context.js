/*import React, { Component } from 'react';
//https://www.linkedin.com/pulse/react-hooks-context-api-native-malith-gammanpila/
import { createContext } from 'react';
const ScoreContext = createContext({});

export default class Provider extends Component {
    state = {
        players: [
            {
                name: "Guil",
                score: 0,
                id: 1
            },
            {
                name: "Treasure",
                score: 0,
                id: 2
            },
            {
                name: "Ashley",
                score: 0,
                id: 3
            },
            {
                name: "James",
                score: 0,
                id: 4
            }
        ]
    };

    render() {
        return (
            <ScoreContext.Provider value={{
                players: this.state.players,
            }}>
                {this.props.children}
            </ScoreContext.Provider>
        );
    }
}
export const Consumer = ScoreContext.Consumer;*/
