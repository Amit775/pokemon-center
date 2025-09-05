import { Field, Int, ObjectType } from '@nestjs/graphql';
import { ConquestMoveData as PrismaConquestMoveData } from '@prisma/client';

@ObjectType()
export class ConquestMoveData implements PrismaConquestMoveData {
  @Field(() => Int)
  move_id: Int;

  @Field(() => Int, { nullable: true })
  power: Int;

  @Field(() => Int, { nullable: true })
  accuracy: Int;

  @Field(() => Int, { nullable: true })
  effect_chance: Int;

  @Field(() => Int, { nullable: true })
  effect_id: Int;

  @Field(() => Int, { nullable: true })
  range_id: Int;

  @Field(() => Int, { nullable: true })
  displacement_id: Int;

}
