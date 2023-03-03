import { useEffect } from "react";
import { PokemonListPresenter } from "./PokemonListPresenter";

export function PokemonListScreen() {
    const presenter = PokemonListPresenter()

    useEffect(() => {
        presenter.getPokemons()
    }, [])

    return (
        <>
            <h1>Pokemon List</h1>
            <PokemonList items={presenter.pokemonList} />
            <button onClick={() => { presenter.getPokemons() }}>Get more!</button>
        </>
    )
}

function PokemonList({ items }) {
    return (
        <ul>
            {items.map(item => <PokemonListItem key={item.name} item={item} />)}
        </ul>
    )
}

function PokemonListItem({ item }) {
    return (
        <li key={item.name}>
            {item.name}
            <img src={item.sprite} />
        </li>
    )
}