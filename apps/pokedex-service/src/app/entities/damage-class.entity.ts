import { Field, Int, ObjectType } from '@nestjs/graphql';
import { DamageClass as PrismaDamageClass } from '@prisma/client';

@ObjectType()
export class DamageClass implements PrismaDamageClass {
	@Field(() => Int)
	id: number;

	@Field()
	name: string;

	@Field()
	slug: string;
}
