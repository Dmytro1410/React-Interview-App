import {apiGet, baserURL} from "./config";
import {TPokemonList} from "../models/Pokemon";

const pokemonURL = `${baserURL}/pokemon`

export const apiGetPokemonById = (id:number) => {
    const url = `${pokemonURL}/${id}`
    return apiGet(url)
}

export const apiGetPokemonMoveByURL = (url:string) => {
    return apiGet(url)
}