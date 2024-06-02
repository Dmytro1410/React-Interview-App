import './styles.css'
import {useContext, useMemo} from "react";
import {BattleContext} from "../../App";

const ActivityLog = () => {

    const {players, moves} = useContext(BattleContext) || {
        moves: {
            playerOneMove: {name: '', power: 0},
            playerTwoMove: {name: '', power: 0}
        }
    }

    const {winner, playerOnePower, playerTwoPower} = useMemo(() => {
        const playerOnePower = moves.playerOneMove?.power || 0
        const playerTwoPower = moves.playerTwoMove?.power || 0

        const winner = playerOnePower > playerTwoPower
            ? players?.playerOne?.name
            : playerOnePower === playerTwoPower
                ? null
                : players?.playerTwo?.name
        return {winner, playerOnePower, playerTwoPower}
    }, [moves.playerOneMove, moves.playerTwoMove, players])

    return <div className={'log-container'}>
        <div>Player 1 move: {moves.playerOneMove?.name}, damage: {playerOnePower}</div>
        <div>Player 2 move: {moves.playerTwoMove?.name} damage: {playerTwoPower}</div>

        <div>{winner ? `Winner: ${winner}` : "Draft"}</div>
    </div>
}

export default ActivityLog