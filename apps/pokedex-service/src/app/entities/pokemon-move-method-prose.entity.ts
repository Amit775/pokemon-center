import { Field, Int, ObjectType } from '@nestjs/graphql';
import { PokemonMoveMethodProse as PrismaPokemonMoveMethodProse } from '@prisma/client';

@ObjectType()
export class PokemonMoveMethodProse implements PrismaPokemonMoveMethodProse {
  @Field(() => Int)
  pokemon_move_method_id: Int;

  @Field(() => Int)
  local_language_id: Int;

  @Field()
  name: String;

  @Field(, { nullable: true })
  description: String;

}
