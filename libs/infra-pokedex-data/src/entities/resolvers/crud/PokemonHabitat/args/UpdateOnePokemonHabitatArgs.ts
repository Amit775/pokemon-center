import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonHabitatUpdateInput } from "../../../inputs/PokemonHabitatUpdateInput";
import { PokemonHabitatWhereUniqueInput } from "../../../inputs/PokemonHabitatWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOnePokemonHabitatArgs {
  @TypeGraphQL.Field(_type => PokemonHabitatUpdateInput, {
    nullable: false
  })
  data!: PokemonHabitatUpdateInput;

  @TypeGraphQL.Field(_type => PokemonHabitatWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonHabitatWhereUniqueInput;
}
