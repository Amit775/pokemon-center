import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonHabitatCreateInput } from "../../../inputs/PokemonHabitatCreateInput";
import { PokemonHabitatUpdateInput } from "../../../inputs/PokemonHabitatUpdateInput";
import { PokemonHabitatWhereUniqueInput } from "../../../inputs/PokemonHabitatWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOnePokemonHabitatArgs {
  @TypeGraphQL.Field(_type => PokemonHabitatWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonHabitatWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonHabitatCreateInput, {
    nullable: false
  })
  create!: PokemonHabitatCreateInput;

  @TypeGraphQL.Field(_type => PokemonHabitatUpdateInput, {
    nullable: false
  })
  update!: PokemonHabitatUpdateInput;
}
