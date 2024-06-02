import {TPokemonBasicAttributes} from "../../models/Pokemon";
import './styles.css'

const Pokemon = ({name, sprites, reverse}: TPokemonBasicAttributes & { reverse: boolean }) => {

    return <div className={`pokemon-container${reverse ? ' container-reverse' : ''}`}>
        <div className={`pokemon-actions${reverse ? ' actions-reverse' : ''}`}><h2>{name}</h2></div>
        <div className={'pokemon-image-container'}>
            <img alt={'pokemon-image'} src={reverse ? sprites?.back_default : sprites?.front_default}/>
        </div>
    </div>
}

export default Pokemon