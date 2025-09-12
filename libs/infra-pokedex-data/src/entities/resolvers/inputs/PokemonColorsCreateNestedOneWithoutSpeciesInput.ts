import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonColorsCreateOrConnectWithoutSpeciesInput } from "../inputs/PokemonColorsCreateOrConnectWithoutSpeciesInput";
import { PokemonColorsCreateWithoutSpeciesInput } from "../inputs/PokemonColorsCreateWithoutSpeciesInput";
import { PokemonColorsWhereUniqueInput } from "../inputs/PokemonColorsWhereUniqueInput";

@TypeGraphQL.InputType("PokemonColorsCreateNestedOneWithoutSpeciesInput", {})
export class PokemonColorsCreateNestedOneWithoutSpeciesInput {
  @TypeGraphQL.Field(_type => PokemonColorsCreateWithoutSpeciesInput, {
    nullable: true
  })
  create?: PokemonColorsCreateWithoutSpeciesInput | undefined;

  @TypeGraphQL.Field(_type => PokemonColorsCreateOrConnectWithoutSpeciesInput, {
    nullable: true
  })
  connectOrCreate?: PokemonColorsCreateOrConnectWithoutSpeciesInput | undefined;

  @TypeGraphQL.Field(_type => PokemonColorsWhereUniqueInput, {
    nullable: true
  })
  connect?: PokemonColorsWhereUniqueInput | undefined;
}
