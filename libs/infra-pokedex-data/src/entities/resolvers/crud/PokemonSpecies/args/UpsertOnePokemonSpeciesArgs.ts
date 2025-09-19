import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonSpeciesCreateInput } from "../../../inputs/PokemonSpeciesCreateInput";
import { PokemonSpeciesUpdateInput } from "../../../inputs/PokemonSpeciesUpdateInput";
import { PokemonSpeciesWhereUniqueInput } from "../../../inputs/PokemonSpeciesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOnePokemonSpeciesArgs {
  @TypeGraphQL.Field(_type => PokemonSpeciesWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonSpeciesWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonSpeciesCreateInput, {
    nullable: false
  })
  create!: PokemonSpeciesCreateInput;

  @TypeGraphQL.Field(_type => PokemonSpeciesUpdateInput, {
    nullable: false
  })
  update!: PokemonSpeciesUpdateInput;
}
