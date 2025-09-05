import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Pokemon as PrismaPokemon } from '@prisma/client';
import { Type } from './type.entity';
import { Move } from './move.entity';
import { Ability } from './ability.entity';
import { Stat } from './stat.entity';

@ObjectType()
export class StatWithBase extends Stat {
	@Field(() => Int)
	baseStat: number;
}

@ObjectType()
export class Pokemon implements PrismaPokemon {
	@Field(() => Int)
	id: number;

	@Field()
	name: string;

	@Field()
	slug: string;

	@Field(() => [Type], { nullable: true })
	types?: Type[];

	@Field(() => [Move], { nullable: true })
	moves?: Move[];

	@Field(() => [Ability], { nullable: true })
	abilities?: Ability[];

	@Field(() => [StatWithBase], { nullable: true })
	stats?: StatWithBase[];
}
