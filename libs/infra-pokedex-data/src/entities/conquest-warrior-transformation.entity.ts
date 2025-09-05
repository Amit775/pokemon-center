import { Field, Int, ObjectType } from '@nestjs/graphql';
import { ConquestWarriorTransformation as PrismaConquestWarriorTransformation } from '@prisma/client';

@ObjectType()
export class ConquestWarriorTransformation implements PrismaConquestWarriorTransformation {
  @Field(() => Int)
  transformed_warrior_rank_id!: number;

  @Field(() => Int)
  is_automatic!: number;

  @Field(() => Int, { nullable: true })
  required_link!: number | null;

  @Field(() => Int, { nullable: true })
  completed_episode_id!: number | null;

  @Field(() => Int, { nullable: true })
  current_episode_id!: number | null;

  @Field(() => Int, { nullable: true })
  distant_warrior_id!: number | null;

  @Field(() => Int, { nullable: true })
  female_warlord_count!: number | null;

  @Field(() => Int, { nullable: true })
  pokemon_count!: number | null;

  @Field(() => Int, { nullable: true })
  collection_type_id!: number | null;

  @Field(() => Int, { nullable: true })
  warrior_count!: number | null;
}
