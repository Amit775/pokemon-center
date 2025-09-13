import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonMovesWhereInput } from "../../inputs/PokemonMovesWhereInput";

@TypeGraphQL.ArgsType()
export class PokemonMoveMethodsCountPokemonMovesArgs {
  @TypeGraphQL.Field(_type => PokemonMovesWhereInput, {
    nullable: true
  })
  where?: PokemonMovesWhereInput | undefined;
}
