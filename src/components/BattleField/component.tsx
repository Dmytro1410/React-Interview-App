import Pokemon from "../Pokemon";
import {TPokemonBasicAttributes} from "../../models/Pokemon";
import './styles.css'

const BattleFieldComponent = ({playerOne, playerTwo, onStartBattle}: {
    playerOne: TPokemonBasicAttributes | null
    playerTwo: TPokemonBasicAttributes | null
    onStartBattle: () => void
}) => <div className={'battlefield-container'}>
    <Pokemon {...playerOne} reverse={false}/>
    <Pokemon {...playerTwo} reverse={true}/>
    <button onClick={onStartBattle} className={'start-battle-btn'}>start battle</button>
</div>

export default BattleFieldComponent