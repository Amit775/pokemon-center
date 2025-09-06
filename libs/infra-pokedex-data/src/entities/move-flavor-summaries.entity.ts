import { Field, Int, ObjectType } from '@nestjs/graphql';
import { MoveFlavorSummaries as PrismaMoveFlavorSummaries } from '@prisma/client';

@ObjectType()
export class MoveFlavorSummaries implements PrismaMoveFlavorSummaries {
  @Field(() => Int)
  move_id!: number;

  @Field(() => Int)
  local_language_id!: number;

  @Field(() => String, { nullable: true })
  flavor_summary!: string | null;
}
