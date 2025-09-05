import { Field, Int, ObjectType } from '@nestjs/graphql';
import { ConquestEpisodeWarriors as PrismaConquestEpisodeWarriors } from '@prisma/client';

@ObjectType()
export class ConquestEpisodeWarriors implements PrismaConquestEpisodeWarriors {
  @Field(() => Int)
  episode_id: Int;

  @Field(() => Int)
  warrior_id: Int;

}
