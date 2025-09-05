import { Field, Int, ObjectType } from '@nestjs/graphql';
import { MoveEffects as PrismaMoveEffects } from '@prisma/client';

@ObjectType()
export class MoveEffects implements PrismaMoveEffects {
	@Field(() => Int)
	id: number;
}
