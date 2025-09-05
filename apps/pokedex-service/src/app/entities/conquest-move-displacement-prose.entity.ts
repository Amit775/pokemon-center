import { Field, Int, ObjectType } from '@nestjs/graphql';
import { ConquestMoveDisplacementProse as PrismaConquestMoveDisplacementProse } from '@prisma/client';

@ObjectType()
export class ConquestMoveDisplacementProse implements PrismaConquestMoveDisplacementProse {
  @Field(() => Int)
  move_displacement_id: Int;

  @Field(() => Int)
  local_language_id: Int;

  @Field()
  name: String;

  @Field(, { nullable: true })
  short_effect: String;

  @Field(, { nullable: true })
  effect: String;

}
