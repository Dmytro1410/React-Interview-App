export type TPokemonList = {
    readonly count: number
    readonly next: string
    readonly previous: string,
    readonly results: IPokemonAPILisItem[]
}

export interface TPokemonBasicAttributes {
    readonly name?: string
    readonly baseStats?: string
    readonly moves?: { move: IPokemonAPILisItem }[]
    readonly sprites?: TBasicSprites
}

export type TBasicSprites = {
    readonly front_default: string
    readonly back_default: string
}

export type IPokemonAPILisItem = {
    readonly name: string
    readonly url: string
}

export type TMove = {
    readonly name: string
    readonly power: number
}