import { getPokemonList, getPokemon, getPokemonDescription } from "../../api/pokeApi.js";
import { PokemonListError } from "../errors/PokemonListErrors";
import { PokemonTypes } from "../model/PokemonTypes.js";

export async function getPokemonListUseCase(currentList) {
    try {
        const list = await getPokemonList(currentList.length)
        const promises = list.map(element => getPokemon(element.url) )
        const info = await Promise.all(promises)
            .then(result => result.map(pokemon => mapPokemonItem(pokemon)))

        const promisesForDescription = info.map(element => getPokemonDescription(element.description))
        await Promise.all(promisesForDescription)
            .then(result => {
                for (let index = 0; index < result.length; index++) {
                    info[index].description = result[index].replace(/[\n\f]/g, ' ')
                }
            })

        return [...currentList, ...info] ?? PokemonListError.EmptyList
    } catch (error) {
        console.error(error)
        return PokemonListError.Unknown
    }
}

function mapPokemonItem(pokemon) {
    return {
        name: pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1),
        types: mapTypes(pokemon.types),
        sprite: pokemon.sprites.front_default,
        height: pokemon.height,
        weight: pokemon.weight,
        description: pokemon.species.url
    }
}

function mapTypes(types) {
    return types.map(type => PokemonTypes.find(item => item.name == type.type.name))
}
