export const baserURL = "https://pokeapi.co/api/v2/"

export const apiGet = async (url:string) => {
    const response = await fetch(url)
    return response.json()
}