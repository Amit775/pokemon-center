import { Field, Int, ObjectType } from '@nestjs/graphql';
import { PokemonSpeciesNames as PrismaPokemonSpeciesNames } from '@prisma/client';

@ObjectType()
export class PokemonSpeciesNames implements PrismaPokemonSpeciesNames {
	@Field(() => Int)
	pokemon_species_id: number;

	@Field(() => Int)
	local_language_id: number;

	@Field()
	name: string;

	@Field({ nullable: true })
	genus?: string;
}
