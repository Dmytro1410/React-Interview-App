import {useContext, useEffect, useState} from "react";
import {apiGetPokemonById, apiGetPokemonMoveByURL} from "../../api/Pokemon";
import {TMove, TPokemonBasicAttributes} from "../../models/Pokemon";
import {getRandomNumber} from "../../utils";

import BattleFieldComponent from "./component";
import {BattleContext} from "../../App";

const BattleField = () => {

    const [playerOne, setPLayerOne] = useState<
        TPokemonBasicAttributes | null
    >(null)
    const [playerTwo, setPLayerTwo] = useState<
        TPokemonBasicAttributes | null
    >(null)

    const {updatePlayers, updateMoves} = useContext(BattleContext) || {}

    useEffect(() => {
        setPlayers()
    }, [])

    const setPlayers = async () => {
        const playerOne =await getPokemon()
        const playerTwo =await getPokemon()
        setPLayerOne(playerOne)
        setPLayerTwo(playerTwo)
        updatePlayers && updatePlayers({playerOne, playerTwo})
    }

    const getPokemon = () => {
        const id = getRandomNumber(1025) // 1025 count of existing pokemons
        return apiGetPokemonById(id)
    }

    const startBattle = async () => {
        const playerOneMoveListItem = playerOne?.moves?.[getRandomNumber(playerOne?.moves?.length || 0)]?.move
        const playerTwoMoveListItem = playerTwo?.moves?.[getRandomNumber(playerTwo?.moves?.length || 0)]?.move
        const playerOneMove = await apiGetPokemonMoveByURL(playerOneMoveListItem?.url as string) as TMove
        const playerTwoMove = await apiGetPokemonMoveByURL(playerTwoMoveListItem?.url as string) as TMove
        updateMoves && updateMoves({playerOneMove, playerTwoMove})
    }


    return <BattleFieldComponent playerOne={playerOne} playerTwo={playerTwo} onStartBattle={startBattle}/>
}

export default BattleField