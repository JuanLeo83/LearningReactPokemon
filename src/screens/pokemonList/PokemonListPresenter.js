import { create } from "zustand";
import { getPokemonListUseCase } from "../../domain/usecases/GetPokemonListUseCase";

export const PokemonListPresenter = create((set, get) => ({
	pokemonList: [],
	isLoading: false,

	getPokemons: async () => {
		set({ isLoading: true })
		const result = await getPokemonListUseCase(get().pokemonList)
		set({ pokemonList: result, isLoading: false })
	},
}))