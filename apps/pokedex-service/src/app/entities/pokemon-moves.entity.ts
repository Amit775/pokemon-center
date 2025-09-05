import { Field, Int, ObjectType } from '@nestjs/graphql';
import { PokemonMoves as PrismaPokemonMoves } from '@prisma/client';

@ObjectType()
export class PokemonMoves implements PrismaPokemonMoves {
  @Field(() => Int)
  pokemon_id: number;

  @Field(() => Int)
  version_group_id: number;

  @Field(() => Int)
  move_id: number;

  @Field(() => Int)
  pokemon_move_method_id: number;

  @Field(() => Int, { nullable: true })
  level: number;

  @Field(() => Int, { nullable: true })
  order: number;

  @Field(() => Int, { nullable: true })
  mastery: number;

}
