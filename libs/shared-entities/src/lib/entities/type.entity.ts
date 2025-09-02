import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Type as PrismaType } from '@prisma/client';
import { Move } from './move.entity';

@ObjectType()
export class Type implements PrismaType {
	@Field(() => Int)
	id: number;

	@Field()
	name: string;

	@Field()
	slug: string;

	@Field(() => [Move], { nullable: true })
	moves?: Move[];
}
