import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonEggGroupWhereInput } from "../../inputs/PokemonEggGroupWhereInput";

@TypeGraphQL.ArgsType()
export class PokemonSpeciesCountEggGroupsArgs {
  @TypeGraphQL.Field(_type => PokemonEggGroupWhereInput, {
    nullable: true
  })
  where?: PokemonEggGroupWhereInput | undefined;
}
