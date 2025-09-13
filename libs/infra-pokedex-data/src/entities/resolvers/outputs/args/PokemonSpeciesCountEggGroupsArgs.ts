import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonEggGroupsWhereInput } from "../../inputs/PokemonEggGroupsWhereInput";

@TypeGraphQL.ArgsType()
export class PokemonSpeciesCountEggGroupsArgs {
  @TypeGraphQL.Field(_type => PokemonEggGroupsWhereInput, {
    nullable: true
  })
  where?: PokemonEggGroupsWhereInput | undefined;
}
