import { Field, Int, ObjectType } from '@nestjs/graphql';
import { ConquestEpisodeWarriors as PrismaConquestEpisodeWarriors } from '@prisma/client';

@ObjectType()
export class ConquestEpisodeWarriors implements PrismaConquestEpisodeWarriors {
  @Field(() => Int)
  episode_id: number;

  @Field(() => Int)
  warrior_id: number;

}
