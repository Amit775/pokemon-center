import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonColorsCreateWithoutSpeciesInput } from "../inputs/PokemonColorsCreateWithoutSpeciesInput";
import { PokemonColorsUpdateWithoutSpeciesInput } from "../inputs/PokemonColorsUpdateWithoutSpeciesInput";
import { PokemonColorsWhereInput } from "../inputs/PokemonColorsWhereInput";

@TypeGraphQL.InputType("PokemonColorsUpsertWithoutSpeciesInput", {})
export class PokemonColorsUpsertWithoutSpeciesInput {
  @TypeGraphQL.Field(_type => PokemonColorsUpdateWithoutSpeciesInput, {
    nullable: false
  })
  update!: PokemonColorsUpdateWithoutSpeciesInput;

  @TypeGraphQL.Field(_type => PokemonColorsCreateWithoutSpeciesInput, {
    nullable: false
  })
  create!: PokemonColorsCreateWithoutSpeciesInput;

  @TypeGraphQL.Field(_type => PokemonColorsWhereInput, {
    nullable: true
  })
  where?: PokemonColorsWhereInput | undefined;
}
