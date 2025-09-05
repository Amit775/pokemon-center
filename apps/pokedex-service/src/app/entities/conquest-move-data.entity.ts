import { Field, Int, ObjectType } from '@nestjs/graphql';
import { ConquestMoveData as PrismaConquestMoveData } from '@prisma/client';

@ObjectType()
export class ConquestMoveData implements PrismaConquestMoveData {
  @Field(() => Int)
  move_id: number;

  @Field(() => Int, { nullable: true })
  power: number;

  @Field(() => Int, { nullable: true })
  accuracy: number;

  @Field(() => Int, { nullable: true })
  effect_chance: number;

  @Field(() => Int, { nullable: true })
  effect_id: number;

  @Field(() => Int, { nullable: true })
  range_id: number;

  @Field(() => Int, { nullable: true })
  displacement_id: number;

}
