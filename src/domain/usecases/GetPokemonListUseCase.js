import { getPokemonList, getSprite, getSpriteUrl } from "../../api/pokeApi.js";
import { PokemonListError } from "../errors/PokemonListErrors";

export async function getPokemonListUseCase(currentList) {
    try {
        const list = await getPokemonList(currentList.length)
            .then(result => result.map(pokemon => {
                const id = getPokemonId(pokemon.url)
                const sprite = getSpriteUrl(id)
                return mapPokemonItem(pokemon, sprite)
            }))



        // const promises = list
        //     .map(element => getPokemonId(element.url) )
        //     .map(pokemonId => getSprite(pokemonId))

        // const result = await Promise.all(promises)
        //     .then(sprites => {
        //         let pokemons = []
        //         for(let index = 0; index < sprites.length; index++) {
        //             const pokemon = mapPokemonItem(list[index], sprites[index])
        //             pokemons.push(pokemon)
        //         }
        //         return pokemons
        //     })

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
