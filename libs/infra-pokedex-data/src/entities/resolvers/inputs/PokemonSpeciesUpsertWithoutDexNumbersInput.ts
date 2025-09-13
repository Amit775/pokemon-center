import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonSpeciesCreateWithoutDexNumbersInput } from "../inputs/PokemonSpeciesCreateWithoutDexNumbersInput";
import { PokemonSpeciesUpdateWithoutDexNumbersInput } from "../inputs/PokemonSpeciesUpdateWithoutDexNumbersInput";
import { PokemonSpeciesWhereInput } from "../inputs/PokemonSpeciesWhereInput";

@TypeGraphQL.InputType("PokemonSpeciesUpsertWithoutDexNumbersInput", {})
export class PokemonSpeciesUpsertWithoutDexNumbersInput {
  @TypeGraphQL.Field(_type => PokemonSpeciesUpdateWithoutDexNumbersInput, {
    nullable: false
  })
  update!: PokemonSpeciesUpdateWithoutDexNumbersInput;

  @TypeGraphQL.Field(_type => PokemonSpeciesCreateWithoutDexNumbersInput, {
    nullable: false
  })
  create!: PokemonSpeciesCreateWithoutDexNumbersInput;

  @TypeGraphQL.Field(_type => PokemonSpeciesWhereInput, {
    nullable: true
  })
  where?: PokemonSpeciesWhereInput | undefined;
}
