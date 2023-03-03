const url = 'https://pokeapi.co/api/v2/'
const imageUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'


export async function getPokemonList(offset) {
    return await doGetRequest('pokemon', { offset: offset })
        .then(result => result.results)
}

export function getPokemon(id) {
    doGetRequest('pokemon/' + id)
        .then(result => console.log(result))
}

export async function getSprite(id) {
    const request = imageUrl + id + '.png'
    return await fetch(request)
        .then(response => response.blob())
        .then(blob => URL.createObjectURL(blob))
}

export function getSpriteUrl(id) {
    return imageUrl + id + '.png'
}

async function doGetRequest(path = '', query = {}) {
    const request = url + path + '?' + new URLSearchParams(query)
    const response = await fetch(request)
    return response.json()
}