import { SimpleGrid } from "@chakra-ui/react"
import { PokemonListItem } from "./PokemonListItem"

export function PokemonList({ items }) {
    return (
        <SimpleGrid spacing={4} columns={{ base: 3, md: 2, sm: 1}}>
            {items.map(item => <PokemonListItem key={item.name} item={item} />)}
        </SimpleGrid>
    )
}