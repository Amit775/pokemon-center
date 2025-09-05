import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Types as PrismaTypes } from '@prisma/client';

@ObjectType()
export class Types implements PrismaTypes {
	@Field(() => Int)
	id: number;

	@Field()
	identifier: string;

	@Field(() => Int)
	generation_id: number;

	@Field(() => Int, { nullable: true })
	damage_class_id?: number;
}
