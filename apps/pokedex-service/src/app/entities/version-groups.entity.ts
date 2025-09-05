import { Field, Int, ObjectType } from '@nestjs/graphql';
import { VersionGroups as PrismaVersionGroups } from '@prisma/client';

@ObjectType()
export class VersionGroups implements PrismaVersionGroups {
	@Field(() => Int)
	id: number;

	@Field()
	identifier: string;

	@Field(() => Int)
	generation_id: number;

	@Field(() => Int)
	order: number;
}
