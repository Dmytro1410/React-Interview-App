import React, {createContext, useState} from 'react';
import './App.css';
import BattleField from "./components/BattleField";
import ActivityLog from "./components/ActivityLog";
import {TMove, TPokemonBasicAttributes} from "./models/Pokemon";

export type TStateMove = { playerOneMove: TMove | null; playerTwoMove: TMove | null }
export type TStatePlayer = { playerOne: TPokemonBasicAttributes | null; playerTwo: TPokemonBasicAttributes | null }

export const BattleContext = createContext<{
    players: TStatePlayer;
    moves: TStateMove;
    updateMoves: (newMoves: TStateMove) => void;
    updatePlayers: (newPlayers: TStatePlayer) => void
} | null>(null)

function App() {
    const [moves, setMoves] = useState<TStateMove>({
        playerOneMove: null,
        playerTwoMove: null
    })
    const [players, setPlayers] = useState<TStatePlayer>({
        playerOne: null,
        playerTwo: null
    })

    const updateMoves = (newMoves: TStateMove) => {
        setMoves(newMoves)
    }

    const updatePlayers = (newPlayers: TStatePlayer) => {
        setPlayers(newPlayers)
    }

    return <BattleContext.Provider value={{players, moves, updateMoves, updatePlayers}}>
        <BattleField/>
        <ActivityLog/>
    </BattleContext.Provider>
}

export default App;
