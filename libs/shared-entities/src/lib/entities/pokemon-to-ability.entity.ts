import { Field, Int, ObjectType } from '@nestjs/graphql';
import { PokemonToAbility as PrismaPokemonToAbility } from '@prisma/client';
import { Pokemon } from './pokemon.entity';
import { Ability } from './ability.entity';

@ObjectType()
export class PokemonToAbility implements PrismaPokemonToAbility {
	@Field(() => Int)
	pokemonId: number;

	@Field(() => Int)
	abilityId: number;

	@Field()
	isHidden: boolean;

	@Field(() => Pokemon)
	pokemon: Pokemon;

	@Field(() => Ability)
	ability: Ability;
}
