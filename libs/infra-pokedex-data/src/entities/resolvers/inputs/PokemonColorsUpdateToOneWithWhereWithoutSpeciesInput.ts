import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonColorsUpdateWithoutSpeciesInput } from "../inputs/PokemonColorsUpdateWithoutSpeciesInput";
import { PokemonColorsWhereInput } from "../inputs/PokemonColorsWhereInput";

@TypeGraphQL.InputType("PokemonColorsUpdateToOneWithWhereWithoutSpeciesInput", {})
export class PokemonColorsUpdateToOneWithWhereWithoutSpeciesInput {
  @TypeGraphQL.Field(_type => PokemonColorsWhereInput, {
    nullable: true
  })
  where?: PokemonColorsWhereInput | undefined;

  @TypeGraphQL.Field(_type => PokemonColorsUpdateWithoutSpeciesInput, {
    nullable: false
  })
  data!: PokemonColorsUpdateWithoutSpeciesInput;
}
