import { getPokemonList, getSpriteUrl } from "../../api/pokeApi.js";
import { PokemonListError } from "../errors/PokemonListErrors";

export async function getPokemonListUseCase(currentList) {
    try {
        const list = await getPokemonList(currentList.length)
            .then(result => result.map(pokemon => {
                const id = getPokemonId(pokemon.url)
                const sprite = getSpriteUrl(id)
                return mapPokemonItem(pokemon, sprite)
            }))

        return [...currentList, ...list] ?? PokemonListError.EmptyList
    } catch (error) {
        console.error(error)
        return PokemonListError.Unknown
    }
}

function getPokemonId(pokemonUrl) {
    const chunks = pokemonUrl.split('/')
    return chunks[chunks.length - 2]
}

function mapPokemonItem(pokemon, sprite) {
    return {
        name: pokemon.name,
        sprite: sprite
    }
}
