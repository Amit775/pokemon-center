import { Field, Int, ObjectType } from '@nestjs/graphql';
import { ConquestTransformationPokemon as PrismaConquestTransformationPokemon } from '@prisma/client';

@ObjectType()
export class ConquestTransformationPokemon implements PrismaConquestTransformationPokemon {
  @Field(() => Int)
  transformation_id: Int;

  @Field(() => Int)
  pokemon_species_id: Int;

}
