import { Field, Int, ObjectType } from '@nestjs/graphql';
import { ConquestEpisodes as PrismaConquestEpisodes } from '@prisma/client';

@ObjectType()
export class ConquestEpisodes implements PrismaConquestEpisodes {
  @Field(() => Int)
  id!: number;

  @Field(() => String)
  identifier!: string;
}
