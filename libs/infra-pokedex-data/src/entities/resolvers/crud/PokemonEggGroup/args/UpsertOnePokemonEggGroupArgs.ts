import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonEggGroupCreateInput } from "../../../inputs/PokemonEggGroupCreateInput";
import { PokemonEggGroupUpdateInput } from "../../../inputs/PokemonEggGroupUpdateInput";
import { PokemonEggGroupWhereUniqueInput } from "../../../inputs/PokemonEggGroupWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOnePokemonEggGroupArgs {
  @TypeGraphQL.Field(_type => PokemonEggGroupWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonEggGroupWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonEggGroupCreateInput, {
    nullable: false
  })
  create!: PokemonEggGroupCreateInput;

  @TypeGraphQL.Field(_type => PokemonEggGroupUpdateInput, {
    nullable: false
  })
  update!: PokemonEggGroupUpdateInput;
}
