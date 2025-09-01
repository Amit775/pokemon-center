import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Stat as PrismaStat } from '@prisma/client';

@ObjectType()
export class Stat implements PrismaStat {
	@Field(() => Int)
	id: number;

	@Field()
	name: string;

	@Field()
	slug: string;
}
