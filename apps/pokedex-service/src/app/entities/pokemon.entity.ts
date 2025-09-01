import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Type } from './type.entity';
import { Pokemon as PrismaPokemon } from '@prisma/client';

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
}
