import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonEggGroupUpdateInput } from "../../../inputs/PokemonEggGroupUpdateInput";
import { PokemonEggGroupWhereUniqueInput } from "../../../inputs/PokemonEggGroupWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOnePokemonEggGroupArgs {
  @TypeGraphQL.Field(_type => PokemonEggGroupUpdateInput, {
    nullable: false
  })
  data!: PokemonEggGroupUpdateInput;

  @TypeGraphQL.Field(_type => PokemonEggGroupWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonEggGroupWhereUniqueInput;
}
