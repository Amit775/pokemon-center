import { Field, Int, ObjectType } from '@nestjs/graphql';
import { MoveTargets as PrismaMoveTargets } from '@prisma/client';

@ObjectType()
export class MoveTargets implements PrismaMoveTargets {
  @Field(() => Int)
  id: number;

  @Field()
  identifier: string;
}
