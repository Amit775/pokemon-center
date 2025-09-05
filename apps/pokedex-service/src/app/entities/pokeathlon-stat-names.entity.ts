import { Field, Int, ObjectType } from '@nestjs/graphql';
import { PokeathlonStatNames as PrismaPokeathlonStatNames } from '@prisma/client';

@ObjectType()
export class PokeathlonStatNames implements PrismaPokeathlonStatNames {
  @Field(() => Int)
  pokeathlon_stat_id: number;

  @Field(() => Int)
  local_language_id: number;

  @Field(() => String)
  name: string;

}
