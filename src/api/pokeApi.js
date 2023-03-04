const url = 'https://pokeapi.co/api/v2/'
const imageUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'


export async function getPokemonList(offset) {
    return await doGetRequest('pokemon', { offset: offset })
        .then(result => result.results)
}

export async function getPokemon(url) {
    return await doSimpleRequest(url)
}

export async function getPokemonDescription(url) {
    const result = await doSimpleRequest(url)
    return result.flavor_text_entries[0].flavor_text
}

async function doSimpleRequest(url) {
    return fetch(url).then(response => response.json())
}

async function doGetRequest(path = '', query = {}) {
    const request = url + path + '?' + new URLSearchParams(query)
    const response = await fetch(request)
    return response.json()
}