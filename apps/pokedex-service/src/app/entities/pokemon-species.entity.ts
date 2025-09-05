import { Field, Int, ObjectType } from '@nestjs/graphql';
import { PokemonSpecies as PrismaPokemonSpecies } from '@prisma/client';

@ObjectType()
export class PokemonSpecies implements PrismaPokemonSpecies {
	@Field(() => Int)
	id: number;

	@Field()
	identifier: string;

	@Field(() => Int)
	generation_id: number;

	@Field(() => Int, { nullable: true })
	evolves_from_species_id?: number;

	@Field(() => Int)
	evolution_chain_id: number;

	@Field(() => Int)
	color_id: number;

	@Field(() => Int)
	shape_id: number;

	@Field(() => Int, { nullable: true })
	habitat_id?: number;

	@Field(() => Int)
	gender_rate: number;

	@Field(() => Int)
	capture_rate: number;

	@Field(() => Int)
	base_happiness: number;

	@Field(() => Int)
	is_baby: number;

	@Field(() => Int)
	hatch_counter: number;

	@Field(() => Int)
	has_gender_differences: number;

	@Field(() => Int)
	growth_rate_id: number;

	@Field(() => Int)
	forms_switchable: number;

	@Field(() => Int)
	is_legendary: number;

	@Field(() => Int)
	is_mythical: number;

	@Field(() => Int)
	order: number;

	@Field(() => Int, { nullable: true })
	conquest_order?: number;
}
