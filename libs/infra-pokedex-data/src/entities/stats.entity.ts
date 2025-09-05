import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Stats as PrismaStats } from '@prisma/client';

@ObjectType()
export class Stats implements PrismaStats {
  @Field(() => Int)
  id!: number;

  @Field(() => Int, { nullable: true })
  damage_class_id!: number | null;

  @Field(() => String)
  identifier!: string;

  @Field(() => Int)
  is_battle_only!: number;

  @Field(() => Int, { nullable: true })
  game_index!: number | null;
}
