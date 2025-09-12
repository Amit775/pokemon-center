import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonColorsUpdateManyMutationInput } from "../../../inputs/PokemonColorsUpdateManyMutationInput";
import { PokemonColorsWhereInput } from "../../../inputs/PokemonColorsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyPokemonColorsArgs {
  @TypeGraphQL.Field(_type => PokemonColorsUpdateManyMutationInput, {
    nullable: false
  })
  data!: PokemonColorsUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => PokemonColorsWhereInput, {
    nullable: true
  })
  where?: PokemonColorsWhereInput | undefined;
}
