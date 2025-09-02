import { Args, Query, Resolver } from '@nestjs/graphql';
import { Pokemon } from '@pokemon-center/shared-entities';
import { PokemonService } from '../services/pokemon.service';

@Resolver(() => Pokemon)
export class PokemonResolver {
	constructor(private readonly pokemonService: PokemonService) {}

	@Query(() => [Pokemon])
	getPokemons(): Promise<Pokemon[]> {
		return this.pokemonService.findAll();
	}

	@Query(() => Pokemon)
	getPokemon(@Args('id') id: number): Promise<Pokemon> {
		return this.pokemonService.findOne(id);
	}
}
