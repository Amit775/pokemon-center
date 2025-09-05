import { Field, Int, ObjectType } from '@nestjs/graphql';
import { PokemonMoveMethodProse as PrismaPokemonMoveMethodProse } from '@prisma/client';

@ObjectType()
export class PokemonMoveMethodProse implements PrismaPokemonMoveMethodProse {
  @Field(() => Int)
  pokemon_move_method_id: number;

  @Field(() => Int)
  local_language_id: number;

  @Field(() => String)
  name: string;

  @Field(() => String, { nullable: true })
  description: string;

}
