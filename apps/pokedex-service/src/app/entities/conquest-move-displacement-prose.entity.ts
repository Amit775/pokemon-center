import { Field, Int, ObjectType } from '@nestjs/graphql';
import { ConquestMoveDisplacementProse as PrismaConquestMoveDisplacementProse } from '@prisma/client';

@ObjectType()
export class ConquestMoveDisplacementProse implements PrismaConquestMoveDisplacementProse {
  @Field(() => Int)
  move_displacement_id: number;

  @Field(() => Int)
  local_language_id: number;

  @Field(() => String)
  name: string;

  @Field(() => String, { nullable: true })
  short_effect: string;

  @Field(() => String, { nullable: true })
  effect: string;

}
