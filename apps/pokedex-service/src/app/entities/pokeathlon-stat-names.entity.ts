import { Field, Int, ObjectType } from '@nestjs/graphql';
import { PokeathlonStatNames as PrismaPokeathlonStatNames } from '@prisma/client';

@ObjectType()
export class PokeathlonStatNames implements PrismaPokeathlonStatNames {
  @Field(() => Int)
  pokeathlon_stat_id: Int;

  @Field(() => Int)
  local_language_id: Int;

  @Field()
  name: String;

}
