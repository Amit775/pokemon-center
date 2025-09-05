import { Field, Int, ObjectType } from '@nestjs/graphql';
import { PokemonDexNumbers as PrismaPokemonDexNumbers } from '@prisma/client';

@ObjectType()
export class PokemonDexNumbers implements PrismaPokemonDexNumbers {
  @Field(() => Int)
  species_id!: number;

  @Field(() => Int)
  pokedex_id!: number;

  @Field(() => Int)
  pokedex_number!: number;
}
