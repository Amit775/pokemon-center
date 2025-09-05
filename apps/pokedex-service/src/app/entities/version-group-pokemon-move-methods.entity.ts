import { Field, Int, ObjectType } from '@nestjs/graphql';
import { VersionGroupPokemonMoveMethods as PrismaVersionGroupPokemonMoveMethods } from '@prisma/client';

@ObjectType()
export class VersionGroupPokemonMoveMethods implements PrismaVersionGroupPokemonMoveMethods {
  @Field(() => Int)
  version_group_id: Int;

  @Field(() => Int)
  pokemon_move_method_id: Int;

}
