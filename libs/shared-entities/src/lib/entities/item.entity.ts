import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Item as PrismaItem } from '@prisma/client';

@ObjectType()
export class Item implements PrismaItem {
	@Field(() => Int)
	id: number;

	@Field()
	name: string;

	@Field()
	slug: string;
}
