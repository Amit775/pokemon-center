import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonEggGroupsUpdateInput } from "../../../inputs/PokemonEggGroupsUpdateInput";
import { PokemonEggGroupsWhereUniqueInput } from "../../../inputs/PokemonEggGroupsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOnePokemonEggGroupsArgs {
  @TypeGraphQL.Field(_type => PokemonEggGroupsUpdateInput, {
    nullable: false
  })
  data!: PokemonEggGroupsUpdateInput;

  @TypeGraphQL.Field(_type => PokemonEggGroupsWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonEggGroupsWhereUniqueInput;
}
