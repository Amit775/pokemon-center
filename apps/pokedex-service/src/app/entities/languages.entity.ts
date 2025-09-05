import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Languages as PrismaLanguages } from '@prisma/client';

@ObjectType()
export class Languages implements PrismaLanguages {
	@Field(() => Int)
	id: number;

	@Field()
	iso639: string;

	@Field()
	iso3166: string;

	@Field()
	identifier: string;

	@Field(() => Int)
	official: number;

	@Field(() => Int)
	order: number;
}
