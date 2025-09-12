import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonColorsCreateInput } from "../../../inputs/PokemonColorsCreateInput";
import { PokemonColorsUpdateInput } from "../../../inputs/PokemonColorsUpdateInput";
import { PokemonColorsWhereUniqueInput } from "../../../inputs/PokemonColorsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOnePokemonColorsArgs {
  @TypeGraphQL.Field(_type => PokemonColorsWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonColorsWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonColorsCreateInput, {
    nullable: false
  })
  create!: PokemonColorsCreateInput;

  @TypeGraphQL.Field(_type => PokemonColorsUpdateInput, {
    nullable: false
  })
  update!: PokemonColorsUpdateInput;
}
