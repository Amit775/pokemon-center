import { Field, Int, ObjectType } from '@nestjs/graphql';
import { ConquestEpisodeNames as PrismaConquestEpisodeNames } from '@prisma/client';

@ObjectType()
export class ConquestEpisodeNames implements PrismaConquestEpisodeNames {
  @Field(() => Int)
  episode_id: number;

  @Field(() => Int)
  local_language_id: number;

  @Field(() => String)
  name: string;

}
