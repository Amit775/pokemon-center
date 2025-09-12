import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonMovesCreateInput } from "../../../inputs/PokemonMovesCreateInput";
import { PokemonMovesUpdateInput } from "../../../inputs/PokemonMovesUpdateInput";
import { PokemonMovesWhereUniqueInput } from "../../../inputs/PokemonMovesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOnePokemonMovesArgs {
  @TypeGraphQL.Field(_type => PokemonMovesWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonMovesWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonMovesCreateInput, {
    nullable: false
  })
  create!: PokemonMovesCreateInput;

  @TypeGraphQL.Field(_type => PokemonMovesUpdateInput, {
    nullable: false
  })
  update!: PokemonMovesUpdateInput;
}
