import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Regions as PrismaRegions } from '@prisma/client';

@ObjectType()
export class Regions implements PrismaRegions {
	@Field(() => Int)
	id: number;

	@Field()
	identifier: string;
}
