import { Field, Int, ObjectType } from '@nestjs/graphql';
import { ConquestMaxLinks as PrismaConquestMaxLinks } from '@prisma/client';

@ObjectType()
export class ConquestMaxLinks implements PrismaConquestMaxLinks {
  @Field(() => Int)
  warrior_rank_id: Int;

  @Field(() => Int)
  pokemon_species_id: Int;

  @Field(() => Int)
  max_link: Int;

}
