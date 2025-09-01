import { Args, Query, Resolver } from '@nestjs/graphql';
import { PokemonType } from '../entities/pokemon-type.entity';
import { PokemonTypeService } from '../services/pokemon-type.service';

@Resolver(() => PokemonType)
export class PokemonTypeResolver {
	constructor(private readonly pokemonTypeService: PokemonTypeService) {}

	@Query(() => [PokemonType])
	getPokemonTypes(): Promise<PokemonType[]> {
		console.log('getPokemonTypes');
		return this.pokemonTypeService.findAll();
	}

	@Query(() => PokemonType)
	getPokemonType(@Args('id') id: number): Promise<PokemonType> {
		return this.pokemonTypeService.findOne(id);
	}
}
