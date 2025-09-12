import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonColorsWhereInput } from "../../../inputs/PokemonColorsWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyPokemonColorsArgs {
  @TypeGraphQL.Field(_type => PokemonColorsWhereInput, {
    nullable: true
  })
  where?: PokemonColorsWhereInput | undefined;
}
