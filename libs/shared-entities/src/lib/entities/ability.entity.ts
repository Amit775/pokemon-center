import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Ability as PrismaAbility } from '@prisma/client';

@ObjectType()
export class Ability implements PrismaAbility {
	@Field(() => Int)
	id: number;

	@Field()
	name: string;

	@Field()
	slug: string;
}
