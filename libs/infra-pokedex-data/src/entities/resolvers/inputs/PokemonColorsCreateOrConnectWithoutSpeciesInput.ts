import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonColorsCreateWithoutSpeciesInput } from "../inputs/PokemonColorsCreateWithoutSpeciesInput";
import { PokemonColorsWhereUniqueInput } from "../inputs/PokemonColorsWhereUniqueInput";

@TypeGraphQL.InputType("PokemonColorsCreateOrConnectWithoutSpeciesInput", {})
export class PokemonColorsCreateOrConnectWithoutSpeciesInput {
  @TypeGraphQL.Field(_type => PokemonColorsWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonColorsWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonColorsCreateWithoutSpeciesInput, {
    nullable: false
  })
  create!: PokemonColorsCreateWithoutSpeciesInput;
}
