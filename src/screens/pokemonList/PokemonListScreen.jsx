import { Button, Heading } from '@chakra-ui/react';
import { useEffect } from "react";
import { PokemonList } from "./components/PokemonList";
import { PokemonListPresenter } from "./PokemonListPresenter";

export function PokemonListScreen() {
    const presenter = PokemonListPresenter()

    useEffect(() => {
        presenter.getPokemons()
    }, [])

    return (
        <>
            <Heading as='h1' size='xl'>Pokemon List</Heading>

            <Button onClick={() => { presenter.getPokemons() }}
                isLoading={presenter.isLoading}
                loadingText='Retrieving...'
                colorScheme='blue'
            >Get more Pokemons!</Button>

            <PokemonList items={presenter.pokemonList} />
        </>
    )
}