import { Field, Int, ObjectType } from '@nestjs/graphql';
import { LocationAreas as PrismaLocationAreas } from '@prisma/client';

@ObjectType()
export class LocationAreas implements PrismaLocationAreas {
	@Field(() => Int)
	id: number;

	@Field(() => Int)
	location_id: number;

	@Field(() => Int)
	game_index: number;

	@Field()
	identifier: string;
}
