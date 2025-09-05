import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Items as PrismaItems } from '@prisma/client';

@ObjectType()
export class Items implements PrismaItems {
	@Field(() => Int)
	id: number;

	@Field()
	identifier: string;

	@Field(() => Int)
	category_id: number;

	@Field(() => Int)
	cost: number;

	@Field(() => Int, { nullable: true })
	fling_power?: number;

	@Field(() => Int, { nullable: true })
	fling_effect_id?: number;
}
