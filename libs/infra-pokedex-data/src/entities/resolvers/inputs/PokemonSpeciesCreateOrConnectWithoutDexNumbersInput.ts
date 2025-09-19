import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonSpeciesCreateWithoutDexNumbersInput } from "../inputs/PokemonSpeciesCreateWithoutDexNumbersInput";
import { PokemonSpeciesWhereUniqueInput } from "../inputs/PokemonSpeciesWhereUniqueInput";

@TypeGraphQL.InputType("PokemonSpeciesCreateOrConnectWithoutDexNumbersInput", {})
export class PokemonSpeciesCreateOrConnectWithoutDexNumbersInput {
  @TypeGraphQL.Field(_type => PokemonSpeciesWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonSpeciesWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonSpeciesCreateWithoutDexNumbersInput, {
    nullable: false
  })
  create!: PokemonSpeciesCreateWithoutDexNumbersInput;
}
