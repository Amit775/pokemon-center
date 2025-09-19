import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonMoveWhereInput } from "../../inputs/PokemonMoveWhereInput";

@TypeGraphQL.ArgsType()
export class MoveCountPokemonMovesArgs {
  @TypeGraphQL.Field(_type => PokemonMoveWhereInput, {
    nullable: true
  })
  where?: PokemonMoveWhereInput | undefined;
}
