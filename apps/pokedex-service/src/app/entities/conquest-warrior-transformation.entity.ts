import { Field, Int, ObjectType } from '@nestjs/graphql';
import { ConquestWarriorTransformation as PrismaConquestWarriorTransformation } from '@prisma/client';

@ObjectType()
export class ConquestWarriorTransformation implements PrismaConquestWarriorTransformation {
  @Field(() => Int)
  transformed_warrior_rank_id: Int;

  @Field(() => Int)
  is_automatic: Int;

  @Field(() => Int, { nullable: true })
  required_link: Int;

  @Field(() => Int, { nullable: true })
  completed_episode_id: Int;

  @Field(() => Int, { nullable: true })
  current_episode_id: Int;

  @Field(() => Int, { nullable: true })
  distant_warrior_id: Int;

  @Field(() => Int, { nullable: true })
  female_warlord_count: Int;

  @Field(() => Int, { nullable: true })
  pokemon_count: Int;

  @Field(() => Int, { nullable: true })
  collection_type_id: Int;

  @Field(() => Int, { nullable: true })
  warrior_count: Int;

}
