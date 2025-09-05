import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Translations as PrismaTranslations } from '@prisma/client';

@ObjectType()
export class Translations implements PrismaTranslations {
	@Field(() => Int)
	language_id: number;

	@Field()
	table: string;

	@Field(() => Int)
	id: number;

	@Field()
	column: string;

	@Field(() => Int)
	source_crc: number;

	@Field()
	string: string;
}
