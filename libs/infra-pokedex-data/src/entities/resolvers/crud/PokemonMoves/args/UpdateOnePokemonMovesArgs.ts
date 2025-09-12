import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonMovesUpdateInput } from "../../../inputs/PokemonMovesUpdateInput";
import { PokemonMovesWhereUniqueInput } from "../../../inputs/PokemonMovesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOnePokemonMovesArgs {
  @TypeGraphQL.Field(_type => PokemonMovesUpdateInput, {
    nullable: false
  })
  data!: PokemonMovesUpdateInput;

  @TypeGraphQL.Field(_type => PokemonMovesWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonMovesWhereUniqueInput;
}
