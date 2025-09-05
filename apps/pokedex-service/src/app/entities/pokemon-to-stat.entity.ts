import { Field, Int, ObjectType } from '@nestjs/graphql';
import { PokemonToStat as PrismaPokemonToStat } from '@prisma/client';
import { Pokemon } from './pokemon.entity';
import { Stat } from './stat.entity';

@ObjectType()
export class PokemonToStat implements PrismaPokemonToStat {
	@Field(() => Int)
	pokemonId: number;

	@Field(() => Int)
	statId: number;

	@Field(() => Int)
	baseStat: number;

	@Field(() => Pokemon)
	pokemon: Pokemon;

	@Field(() => Stat)
	stat: Stat;
}
