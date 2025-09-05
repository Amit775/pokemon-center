import { Field, Int, ObjectType } from '@nestjs/graphql';
import { ConquestMaxLinks as PrismaConquestMaxLinks } from '@prisma/client';

@ObjectType()
export class ConquestMaxLinks implements PrismaConquestMaxLinks {
  @Field(() => Int)
  warrior_rank_id: number;

  @Field(() => Int)
  pokemon_species_id: number;

  @Field(() => Int)
  max_link: number;

}
