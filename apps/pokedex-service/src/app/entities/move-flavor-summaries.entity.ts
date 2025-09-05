import { Field, Int, ObjectType } from '@nestjs/graphql';
import { MoveFlavorSummaries as PrismaMoveFlavorSummaries } from '@prisma/client';

@ObjectType()
export class MoveFlavorSummaries implements PrismaMoveFlavorSummaries {
  @Field(() => Int)
  move_id: Int;

  @Field(() => Int)
  local_language_id: Int;

  @Field(, { nullable: true })
  flavor_summary: String;

}
