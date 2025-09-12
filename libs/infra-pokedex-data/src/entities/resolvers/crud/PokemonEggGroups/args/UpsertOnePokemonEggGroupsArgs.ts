import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonEggGroupsCreateInput } from "../../../inputs/PokemonEggGroupsCreateInput";
import { PokemonEggGroupsUpdateInput } from "../../../inputs/PokemonEggGroupsUpdateInput";
import { PokemonEggGroupsWhereUniqueInput } from "../../../inputs/PokemonEggGroupsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOnePokemonEggGroupsArgs {
  @TypeGraphQL.Field(_type => PokemonEggGroupsWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonEggGroupsWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonEggGroupsCreateInput, {
    nullable: false
  })
  create!: PokemonEggGroupsCreateInput;

  @TypeGraphQL.Field(_type => PokemonEggGroupsUpdateInput, {
    nullable: false
  })
  update!: PokemonEggGroupsUpdateInput;
}
