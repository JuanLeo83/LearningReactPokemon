import { create } from "zustand";
import { getPokemonListUseCase } from "../../domain/usecases/GetPokemonListUseCase";

export const PokemonListPresenter = create((set, get) => ({
	pokemonList: [],

	getPokemons: async () => {
		const result = await getPokemonListUseCase(get().pokemonList)
		set({ pokemonList: result })
	},
}))