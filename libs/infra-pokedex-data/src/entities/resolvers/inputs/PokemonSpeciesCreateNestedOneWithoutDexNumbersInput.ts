import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonSpeciesCreateOrConnectWithoutDexNumbersInput } from "../inputs/PokemonSpeciesCreateOrConnectWithoutDexNumbersInput";
import { PokemonSpeciesCreateWithoutDexNumbersInput } from "../inputs/PokemonSpeciesCreateWithoutDexNumbersInput";
import { PokemonSpeciesWhereUniqueInput } from "../inputs/PokemonSpeciesWhereUniqueInput";

@TypeGraphQL.InputType("PokemonSpeciesCreateNestedOneWithoutDexNumbersInput", {})
export class PokemonSpeciesCreateNestedOneWithoutDexNumbersInput {
  @TypeGraphQL.Field(_type => PokemonSpeciesCreateWithoutDexNumbersInput, {
    nullable: true
  })
  create?: PokemonSpeciesCreateWithoutDexNumbersInput | undefined;

  @TypeGraphQL.Field(_type => PokemonSpeciesCreateOrConnectWithoutDexNumbersInput, {
    nullable: true
  })
  connectOrCreate?: PokemonSpeciesCreateOrConnectWithoutDexNumbersInput | undefined;

  @TypeGraphQL.Field(_type => PokemonSpeciesWhereUniqueInput, {
    nullable: true
  })
  connect?: PokemonSpeciesWhereUniqueInput | undefined;
}
