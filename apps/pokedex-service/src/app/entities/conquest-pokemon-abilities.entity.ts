import { Field, Int, ObjectType } from '@nestjs/graphql';
import { ConquestPokemonAbilities as PrismaConquestPokemonAbilities } from '@prisma/client';

@ObjectType()
export class ConquestPokemonAbilities implements PrismaConquestPokemonAbilities {
  @Field(() => Int)
  pokemon_species_id: Int;

  @Field(() => Int)
  slot: Int;

  @Field(() => Int)
  ability_id: Int;

}
