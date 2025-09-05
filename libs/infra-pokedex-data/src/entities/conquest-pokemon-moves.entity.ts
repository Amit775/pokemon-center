import { Field, Int, ObjectType } from '@nestjs/graphql';
import { ConquestPokemonMoves as PrismaConquestPokemonMoves } from '@prisma/client';

@ObjectType()
export class ConquestPokemonMoves implements PrismaConquestPokemonMoves {
  @Field(() => Int)
  pokemon_species_id!: number;

  @Field(() => Int)
  move_id!: number;
}
