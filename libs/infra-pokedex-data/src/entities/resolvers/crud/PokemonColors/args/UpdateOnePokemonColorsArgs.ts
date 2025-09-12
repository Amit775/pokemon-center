import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonColorsUpdateInput } from "../../../inputs/PokemonColorsUpdateInput";
import { PokemonColorsWhereUniqueInput } from "../../../inputs/PokemonColorsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOnePokemonColorsArgs {
  @TypeGraphQL.Field(_type => PokemonColorsUpdateInput, {
    nullable: false
  })
  data!: PokemonColorsUpdateInput;

  @TypeGraphQL.Field(_type => PokemonColorsWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonColorsWhereUniqueInput;
}
